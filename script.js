const translations = {
  en: {
    features: "Features",
    howItWorks: "How It Works",
    pricing: "Pricing",
    heroTitle: "Welcome to Our Product",
    heroDesc: "High-quality, reliable, and affordable solutions made for you.",
    submitBtn: "Get Started",
    feature1Title: "Fast Delivery",
    feature1Desc: "Get your product quickly with our optimized logistics system.",
    feature2Title: "Reliable Support",
    feature2Desc: "We offer 24/7 customer support to assist with all your needs.",
    feature3Title: "Quality Assurance",
    feature3Desc: "Each product is tested and verified to meet high standards.",
    basic: "Basic",
    pro: "Pro",
    enterprise: "Enterprise",
    contactUs: "Contact Us"
  },
  fr: {
    features: "Fonctionnalités",
    howItWorks: "Comment ça marche",
    pricing: "Tarification",
    heroTitle: "Bienvenue à notre produit",
    heroDesc: "Des solutions de haute qualité, fiables et abordables pour vous.",
    submitBtn: "Commencer",
    feature1Title: "Livraison rapide",
    feature1Desc: "Recevez votre produit rapidement grâce à notre logistique optimisée.",
    feature2Title: "Support fiable",
    feature2Desc: "Assistance 24/7 pour tous vos besoins.",
    feature3Title: "Assurance qualité",
    feature3Desc: "Chaque produit est vérifié pour répondre à des normes élevées.",
    basic: "Basique",
    pro: "Pro",
    enterprise: "Entreprise",
    contactUs: "Contactez-nous"
  },
  es: {
    features: "Características",
    howItWorks: "Cómo funciona",
    pricing: "Precios",
    heroTitle: "Bienvenido a nuestro producto",
    heroDesc: "Soluciones confiables, asequibles y de alta calidad para ti.",
    submitBtn: "Comenzar",
    feature1Title: "Entrega rápida",
    feature1Desc: "Recibe tu producto rápidamente con logística optimizada.",
    feature2Title: "Soporte confiable",
    feature2Desc: "Atención al cliente 24/7 para ayudarte siempre.",
    feature3Title: "Garantía de calidad",
    feature3Desc: "Probado y verificado con los más altos estándares.",
    basic: "Básico",
    pro: "Pro",
    enterprise: "Empresarial",
    contactUs: "Contáctanos"
  },
  ar: {
    features: "الميزات",
    howItWorks: "كيف يعمل",
    pricing: "الأسعار",
    heroTitle: "مرحبًا بكم في منتجنا",
    heroDesc: "حلول عالية الجودة وموثوقة وبأسعار معقولة مصممة لك.",
    submitBtn: "ابدأ الآن",
    feature1Title: "توصيل سريع",
    feature1Desc: "احصل على منتجك بسرعة من خلال نظام لوجستي فعال.",
    feature2Title: "دعم موثوق",
    feature2Desc: "ندعمك على مدار الساعة في كل ما تحتاجه.",
    feature3Title: "ضمان الجودة",
    feature3Desc: "نختبر كل منتج ليتوافق مع أعلى المعايير.",
    basic: "أساسي",
    pro: "محترف",
    enterprise: "مؤسسة",
    contactUs: "اتصل بنا"
  }
};

document.getElementById("language").addEventListener("change", function () {
  const lang = this.value;
  const keys = document.querySelectorAll("[data-key]");

  keys.forEach((el) => {
    const key = el.getAttribute("data-key");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  document.documentElement.setAttribute("lang", lang);
});
