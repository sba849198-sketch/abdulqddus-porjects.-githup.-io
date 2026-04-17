// js/projects.js — بيانات جميع المشاريع
// لإضافة مشروع جديد: أضف object جديد في هذا المصفوفة

const PROJECTS = [
  {
    id: "souga",
    slug: "souga",
    title: "سوقة — Souga",
    subtitle: "سوق إلكتروني محلي يربط البائعين بالمشترين",
    description: `سوقة هو تطبيق سوق إلكتروني متكامل يربط البائعين المحليين بالمشترين في منطقتهم. يوفر التطبيق تجربة تسوق سلسة مع نظام تقييمات، محادثات مباشرة، وإدارة طلبات متقدمة.`,
    longDescription: `سوقة منصة تجارة إلكترونية محلية مبنية بـ Flutter وFirebase تتيح للبائعين نشر منتجاتهم بسهولة، وللمشترين تصفح السوق والشراء المباشر. يضم التطبيق ثلاثة أدوار: مشتري وبائع ومدير، مع لوحة تحكم كاملة لكل دور.

الميزات الرئيسية:
• نظام تسجيل دخول آمن مع Firebase Auth
• رفع صور المنتجات عبر ImageKit مع تحسين تلقائي
• محادثات مباشرة بين المشترين والبائعين
• نظام تقييمات ومراجعات
• إشعارات فورية بحالة الطلبات
• إعلانات تسويقية بالذكاء الاصطناعي (Gemini)
• دعم 42 عملة عالمية
• لوحة تحكم للمدير مع إدارة كاملة`,
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
    screenshots: [],
    downloadUrl: "https://github.com/sba849198-sketch/sba849198-sketch.github.io/releases/download/v1.0.0/app-release.apk",
    sourceUrl: "",
    demoUrl: "",
    featured: true,
    date: "2025",
    stats: { downloads: "1K+", rating: "4.8", reviews: "120+" }
  },
  // ─── أضف مشاريعك هنا ─────────────────────────────────────────────────────
  // {
  //   id: "shaibai",
  //   slug: "shaibai",
  //   title: "شيب AI",
  //   subtitle: "وكيل ذكاء اصطناعي لسطح المكتب",
  //   type: "desktop",          // android | webapp | desktop | website
  //   platform: "Windows",
  //   status: "released",       // released | beta | coming_soon
  //   version: "2.0.0",
  //   size: "120 MB",
  //   category: "إنتاجية",
  //   tags: ["C#", ".NET", "LM Studio", "WinForms"],
  //   color: "#1565C0",
  //   accentColor: "#42A5F5",
  //   icon: "🤖",
  //   description: "وصف مختصر...",
  //   longDescription: "وصف تفصيلي...",
  //   downloadUrl: "https://github.com/YOUR_USERNAME/shaibai/releases/download/v2.0.0/shaibai-setup.exe",
  //   featured: false,
  //   date: "2025",
  //   stats: { downloads: "500+", rating: "4.9", reviews: "45+" }
  // }
];

// أنواع المشاريع وتفاصيلها
const PROJECT_TYPES = {
  android: {
    label: "تطبيق Android",
    icon: "📱",
    badge: "APK",
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
    label: "تطبيق سطح المكتب",
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
