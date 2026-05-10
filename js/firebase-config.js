// ==========================================
// firebase-config.js — إعدادات Firebase
// ==========================================
// 🔴 المطلوب منك: استبدل القيم أدناه بإعدادات مشروعك من Firebase Console
// اذهب إلى: Firebase Console → Project Settings → Your Apps → Firebase SDK snippet

var FIREBASE_CONFIG = {
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_PROJECT_ID.firebaseapp.com",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId:             "YOUR_APP_ID"
};

// ==========================================
// تهيئة Firebase
// ==========================================
firebase.initializeApp(FIREBASE_CONFIG);
var db = firebase.firestore();

// ==========================================
// AQStats — نظام الإحصائيات الحقيقية
// ==========================================
var AQStats = (function () {

  // ---- قراءة إحصائيات مشروع واحد ----
  function getStats(projectId, callback) {
    db.collection("projects").doc(projectId)
      .get()
      .then(function (doc) {
        if (doc.exists) {
          callback(doc.data());
        } else {
          callback({ views: 0, downloads: 0 });
        }
      })
      .catch(function () {
        callback({ views: 0, downloads: 0 });
      });
  }

  // ---- استماع لحظي (real-time) لإحصائيات مشروع ----
  function listenStats(projectId, callback) {
    return db.collection("projects").doc(projectId)
      .onSnapshot(function (doc) {
        if (doc.exists) {
          callback(doc.data());
        } else {
          callback({ views: 0, downloads: 0 });
        }
      }, function () {
        callback({ views: 0, downloads: 0 });
      });
  }

  // ---- تسجيل مشاهدة ----
  function recordView(projectId) {
    var ref = db.collection("projects").doc(projectId);
    ref.set(
      { views: firebase.firestore.FieldValue.increment(1) },
      { merge: true }
    ).catch(function () {});
  }

  // ---- تسجيل تحميل ----
  function recordDownload(projectId) {
    var ref = db.collection("projects").doc(projectId);
    ref.set(
      { downloads: firebase.firestore.FieldValue.increment(1) },
      { merge: true }
    ).catch(function () {});
  }

  // ---- قراءة كل إحصائيات المشاريع دفعةً واحدة ----
  function getAllStats(callback) {
    db.collection("projects").get()
      .then(function (snapshot) {
        var result = {};
        snapshot.forEach(function (doc) {
          result[doc.id] = doc.data();
        });
        callback(result);
      })
      .catch(function () { callback({}); });
  }

  return { getStats: getStats, listenStats: listenStats, recordView: recordView, recordDownload: recordDownload, getAllStats: getAllStats };
})();

// ==========================================
// AQReviews — نظام التقييمات الحقيقية
// ==========================================
var AQReviews = (function () {

  // ---- قراءة تقييمات مشروع (أحدث 50) ----
  function getReviews(projectId, callback) {
    db.collection("projects").doc(projectId)
      .collection("reviews")
      .orderBy("createdAt", "desc")
      .limit(50)
      .get()
      .then(function (snapshot) {
        var reviews = [];
        snapshot.forEach(function (doc) {
          var d = doc.data();
          reviews.push({
            id:     doc.id,
            name:   d.name   || "مجهول",
            rating: d.rating || 0,
            text:   d.text   || "",
            date:   d.dateStr || ""
          });
        });
        callback(reviews);
      })
      .catch(function () { callback([]); });
  }

  // ---- استماع لحظي للتقييمات ----
  function listenReviews(projectId, callback) {
    return db.collection("projects").doc(projectId)
      .collection("reviews")
      .orderBy("createdAt", "desc")
      .limit(50)
      .onSnapshot(function (snapshot) {
        var reviews = [];
        snapshot.forEach(function (doc) {
          var d = doc.data();
          reviews.push({
            id:     doc.id,
            name:   d.name   || "مجهول",
            rating: d.rating || 0,
            text:   d.text   || "",
            date:   d.dateStr || ""
          });
        });
        callback(reviews);
      }, function () { callback([]); });
  }

  // ---- إرسال تقييم جديد ----
  function addReview(projectId, name, rating, text, callback) {
    var now   = new Date();
    var month = now.getMonth() + 1;
    var dateStr = now.getFullYear() + "/" + (month < 10 ? "0" + month : month) + "/" + (now.getDate() < 10 ? "0" + now.getDate() : now.getDate());

    var reviewData = {
      name:      name || "مجهول",
      rating:    rating,
      text:      text,
      dateStr:   dateStr,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    };

    db.collection("projects").doc(projectId)
      .collection("reviews")
      .add(reviewData)
      .then(function () {
        // تحديث متوسط التقييم في وثيقة المشروع
        _updateAvgRating(projectId);
        callback(true);
      })
      .catch(function () { callback(false); });
  }

  // ---- تحديث متوسط التقييم ----
  function _updateAvgRating(projectId) {
    db.collection("projects").doc(projectId)
      .collection("reviews")
      .get()
      .then(function (snapshot) {
        if (snapshot.empty) return;
        var total = 0, count = 0;
        snapshot.forEach(function (doc) {
          total += (doc.data().rating || 0);
          count++;
        });
        db.collection("projects").doc(projectId).set({
          avgRating:    Math.round((total / count) * 10) / 10,
          reviewsCount: count
        }, { merge: true });
      });
  }

  return { getReviews: getReviews, listenReviews: listenReviews, addReview: addReview };
})();
