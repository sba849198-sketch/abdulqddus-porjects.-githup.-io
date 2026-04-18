// js/projects.js v2
// ملاحظة: لا نستخدم backticks (template literals) لأن بعض المتصفحات القديمة لا تدعمها

var PROJECTS = [
  {
    id: "souga",
    slug: "souga",
    title: "سوقة — Souga",
    subtitle: "سوق إلكتروني محلي يربط البائعين بالمشترين",
    description: "سوقة هو تطبيق سوق إلكتروني متكامل يربط البائعين المحليين بالمشترين في منطقتهم. يوفر التطبيق تجربة تسوق سلسة مع نظام تقييمات ومحادثات مباشرة وإدارة طلبات متقدمة.",
    longDescription: "سوقة منصة تجارة إلكترونية محلية مبنية بـ Flutter وFirebase.\n\nالميزات الرئيسية:\n• نظام تسجيل دخول آمن مع Firebase Auth\n• رفع صور المنتجات عبر ImageKit مع تحسين تلقائي\n• محادثات مباشرة بين المشترين والبائعين\n• نظام تقييمات ومراجعات\n• إشعارات فورية بحالة الطلبات\n• إعلانات تسويقية بالذكاء الاصطناعي (Gemini)\n• دعم 42 عملة عالمية\n• لوحة تحكم للمدير مع إدارة كاملة",
    type: "android",
    platform: "Android",
    status: "released",
    version: "1.0.0",
    size: "24 MB",
    category: "تجارة إلكترونية",
    tags: ["Flutter", "Firebase", "Dart", "ImageKit", "Gemini AI"],
    color: "#DC143C",
    accentColor: "#FFB300",
    icon: "🛒",
    // ─── أضف روابط screenshots من GitHub أو ImageKit ────────────────
    // مثال: "https://raw.githubusercontent.com/USER/REPO/main/screenshots/screen1.png"
    screenshots: [
      // "https://raw.githubusercontent.com/YOUR_USERNAME/souga/main/screenshots/home.png",
      // "https://raw.githubusercontent.com/YOUR_USERNAME/souga/main/screenshots/products.png",
      // "https://raw.githubusercontent.com/YOUR_USERNAME/souga/main/screenshots/cart.png"
    ],
    downloadUrl: "https://github.com/YOUR_USERNAME/souga/releases/download/v1.0.0/souga-v1.0.0.apk",
    sourceUrl: "",
    demoUrl: "",
    featured: true,
    date: "2025",
    stats: { downloads: "1K+", rating: "4.8", reviews: "120+" }
  }
  // ─── أضف مشاريع هنا ──────────────────────────────────────────────
];

var PROJECT_TYPES = {
  android: {
    label: "تطبيق Android",
    icon: "📱",
    badge: "Android",
    downloadLabel: "تحميل APK",
    color: "#3DDC84"
  },
  webapp: {
    label: "تطبيق ويب",
    icon: "🌐",
    badge: "Web App",
    downloadLabel: "فتح التطبيق",
    color: "#4285F4"
  },
  desktop: {
    label: "سطح المكتب",
    icon: "💻",
    badge: "Desktop",
    downloadLabel: "تحميل البرنامج",
    color: "#9C27B0"
  },
  website: {
    label: "موقع ويب",
    icon: "🔗",
    badge: "Website",
    downloadLabel: "زيارة الموقع",
    color: "#FF6D00"
  }
};
