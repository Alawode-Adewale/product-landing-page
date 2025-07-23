// Basic translations object
const translations = {
  en: {
    title: "Welcome to Our Product",
    description: "High-quality, reliable, and affordable solutions made for you.",
    features: "Features",
    feature1: "Fast Delivery",
    feature1Desc: "Get your product quickly with our optimized logistics system.",
    feature2: "Reliable Support",
    feature2Desc: "We offer 24/7 customer support to assist with all your needs.",
    feature3: "Quality Assurance",
    feature3Desc: "Each product is tested and verified to meet high standards.",
    howItWorks: "How It Works",
    pricing: "Pricing",
    basic: "Basic",
    pro: "Pro",
    enterprise: "Enterprise",
    contact: "Contact Us",
    submit: "Get Started",
    placeholder: "Enter your email"
  },
  es: {
    title: "Bienvenido a Nuestro Producto",
    description: "Soluciones de alta calidad, confiables y asequibles hechas para ti.",
    features: "Características",
    feature1: "Entrega Rápida",
    feature1Desc: "Recibe tu producto rápidamente con nuestro sistema logístico optimizado.",
    feature2: "Soporte Confiable",
    feature2Desc: "Ofrecemos soporte al cliente 24/7 para ayudarte en todo momento.",
    feature3: "Garantía de Calidad",
    feature3Desc: "Cada producto está probado y verificado con altos estándares.",
    howItWorks: "Cómo Funciona",
    pricing: "Precios",
    basic: "Básico",
    pro: "Pro",
    enterprise: "Empresa",
    contact: "Contáctanos",
    submit: "Comenzar",
    placeholder: "Introduce tu correo electrónico"
  }
};

// DOM elements to translate
const elements = {
  title: document.querySelector("#hero h1"),
  description: document.querySelector("#hero p"),
  features: document.querySelector("#features h2"),
  feature1: document.querySelectorAll(".feature h3")[0],
  feature1Desc: document.querySelectorAll(".feature p")[0],
  feature2: document.querySelectorAll(".feature h3")[1],
  feature2Desc: document.querySelectorAll(".feature p")[1],
  feature3: document.querySelectorAll(".feature h3")[2],
  feature3Desc: document.querySelectorAll(".feature p")[2],
  howItWorks: document.querySelector("#how-it-works h2"),
  pricing: document.querySelector("#pricing h2"),
  basic: document.querySelectorAll(".option h3")[0],
  pro: document.querySelectorAll(".option h3")[1],
  enterprise: document.querySelectorAll(".option h3")[2],
  contact: document.querySelectorAll(".option p")[2],
  submit: document.querySelector("#submit"),
  email: document.querySelector("#email")
};

// Language switcher
document.getElementById("language-select").addEventListener("change", (e) => {
  const lang = e.target.value;
  const t = translations[lang];

  if (t) {
    elements.title.textContent = t.title;
    elements.description.textContent = t.description;
    elements.features.textContent = t.features;
    elements.feature1.textContent = t.feature1;
    elements.feature1Desc.textContent = t.feature1Desc;
    elements.feature2.textContent = t.feature2;
    elements.feature2Desc.textContent = t.feature2Desc;
    elements.feature3.textContent = t.feature3;
    elements.feature3Desc.textContent = t.feature3Desc;
    elements.howItWorks.textContent = t.howItWorks;
    elements.pricing.textContent = t.pricing;
    elements.basic.textContent = t.basic;
    elements.pro.textContent = t.pro;
    elements.enterprise.textContent = t.enterprise;
    elements.contact.textContent = t.contact;
    elements.submit.value = t.submit;
    elements.email.placeholder = t.placeholder;
  }
});
