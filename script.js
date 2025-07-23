const translations = {
  en: {
    title: "Product Landing Page",
    heroHeading: "Welcome to Our Product",
    heroSub: "High-quality, reliable, and affordable solutions made for you.",
    features: "Features",
    how: "How It Works",
    pricing: "Pricing",
    fast: "Fast Delivery",
    fastDesc: "Get your product quickly with our optimized logistics system.",
    support: "Reliable Support",
    supportDesc: "We offer 24/7 customer support to assist with all your needs.",
    quality: "Quality Assurance",
    qualityDesc: "Each product is tested and verified to meet high standards.",
    basic: "Basic",
    pro: "Pro",
    enterprise: "Enterprise",
    contact: "Contact Us",
    submit: "Get Started",
    placeholder: "Enter your email",
    footer: "All rights reserved."
  },
  ar: {
    title: "صفحة المنتج",
    heroHeading: "مرحبًا بك في منتجنا",
    heroSub: "حلول عالية الجودة وموثوقة وبأسعار معقولة مصممة خصيصًا لك.",
    features: "الميزات",
    how: "كيف يعمل",
    pricing: "الأسعار",
    fast: "توصيل سريع",
    fastDesc: "احصل على منتجك بسرعة من خلال نظام الخدمات اللوجستية المحسن لدينا.",
    support: "دعم موثوق",
    supportDesc: "نقدم دعمًا للعملاء على مدار الساعة طوال أيام الأسبوع لتلبية جميع احتياجاتك.",
    quality: "ضمان الجودة",
    qualityDesc: "يتم اختبار كل منتج والتحقق منه لتلبية المعايير العالية.",
    basic: "أساسي",
    pro: "احترافي",
    enterprise: "مؤسسة",
    contact: "اتصل بنا",
    submit: "ابدأ الآن",
    placeholder: "أدخل بريدك الإلكتروني",
    footer: "جميع الحقوق محفوظة."
  }
};

document.getElementById("language").addEventListener("change", function () {
  const lang = this.value;
  const t = translations[lang];

  document.documentElement.lang = lang;
  document.body.dir = lang === "ar" ? "rtl" : "ltr";

  document.title = t.title;
  document.querySelector("#hero h1").textContent = t.heroHeading;
  document.querySelector("#hero p").textContent = t.heroSub;

  document.querySelector("a[href='#features']").textContent = t.features;
  document.querySelector("a[href='#how-it-works']").textContent = t.how;
  document.querySelector("a[href='#pricing']").textContent = t.pricing;

  const featureTitles = document.querySelectorAll(".feature h3");
  const featureDescs = document.querySelectorAll(".feature p");
  featureTitles[0].textContent = t.fast;
  featureDescs[0].textContent = t.fastDesc;
  featureTitles[1].textContent = t.support;
  featureDescs[1].textContent = t.supportDesc;
  featureTitles[2].textContent = t.quality;
  featureDescs[2].textContent = t.qualityDesc;

  const pricingTitles = document.querySelectorAll(".option h3");
  const pricingDescs = document.querySelectorAll(".option p");
  pricingTitles[0].textContent = t.basic;
  pricingDescs[0].textContent = "$19/month";
  pricingTitles[1].textContent = t.pro;
  pricingDescs[1].textContent = "$49/month";
  pricingTitles[2].textContent = t.enterprise;
  pricingDescs[2].textContent = t.contact;

  document.getElementById("submit").value = t.submit;
  document.getElementById("email").placeholder = t.placeholder;

  document.querySelector("footer p").textContent = `© 2025 Your Company. ${t.footer}`;
});
