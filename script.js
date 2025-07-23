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
    contactUs: "Contact Us",
  },
  fr: {
    features: "Fonctionnalités",
    howItWorks: "Comment ça marche",
    pricing: "Tarification",
    heroTitle: "Bienvenue sur notre produit",
    heroDesc: "Des solutions de qualité, fiables et abordables pour vous.",
    submitBtn: "Commencer",
    feature1Title: "Livraison rapide",
    feature1Desc: "Recevez votre produit rapidement grâce à notre logistique optimisée.",
    feature2Title: "Support fiable",
    feature2Desc: "Assistance 24/7 pour tous vos besoins.",
    feature3Title: "Assurance qualité",
    feature3Desc: "Chaque produit est testé pour répondre aux normes élevées.",
    basic: "Basique",
    pro: "Pro",
    enterprise: "Entreprise",
    contactUs: "Contactez-nous",
  },
  es: {
    features: "Características",
    howItWorks: "Cómo funciona",
    pricing: "Precios",
    heroTitle: "Bienvenido a nuestro producto",
    heroDesc: "Soluciones de alta calidad, confiables y asequibles hechas para ti.",
    submitBtn: "Empezar",
    feature1Title: "Entrega rápida",
    feature1Desc: "Recibe tu producto rápidamente con nuestro sistema logístico.",
    feature2Title: "Soporte confiable",
    feature2Desc: "Ofrecemos atención al cliente 24/7 para ayudarte siempre.",
    feature3Title: "Garantía de calidad",
    feature3Desc: "Cada producto está probado y verificado para cumplir con estándares altos.",
    basic: "Básico",
    pro: "Pro",
    enterprise: "Empresa",
    contactUs: "Contáctenos",
  },
  ar: {
    features: "الميزات",
    howItWorks: "كيف تعمل",
    pricing: "الأسعار",
    heroTitle: "مرحبًا بكم في منتجنا",
    heroDesc: "حلول عالية الجودة وموثوقة وبأسعار معقولة صممت من أجلك.",
    submitBtn: "ابدأ الآن",
    feature1Title: "توصيل سريع",
    feature1Desc: "احصل على منتجك بسرعة من خلال نظامنا اللوجستي المحسن.",
    feature2Title: "دعم موثوق",
    feature2Desc: "نقدم دعمًا على مدار الساعة لتلبية جميع احتياجاتك.",
    feature3Title: "ضمان الجودة",
    feature3Desc: "يتم اختبار كل منتج والتحقق منه لتلبية أعلى المعايير.",
    basic: "أساسي",
    pro: "احترافي",
    enterprise: "مؤسسة",
    contactUs: "اتصل بنا",
  },
};

const languageSelector = document.getElementById("language");

function updateLanguage(lang) {
  const texts = document.querySelectorAll("[data-key]");
  texts.forEach((element) => {
    const key = element.getAttribute("data-key");
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
}

languageSelector.addEventListener("change", (e) => {
  updateLanguage(e.target.value);
});

// Default language on load
updateLanguage("en");
