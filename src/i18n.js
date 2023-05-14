  import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEN from "./assets/translation/en/translation.json";
import translationDE from "./assets/translation/de/translation.json";
import translationKO from "./assets/translation/ko/translation.json";
import translationZH from "./assets/translation/zh/translation.json";
import translationRU from "./assets/translation/ru/translation.json";
import translationTR from "./assets/translation/tr/translation.json";
import translationFR from "./assets/translation/fr/translation.json";
import translationES from "./assets/translation/es/translation.json";


const fallbackLng = ["en"];
const availableLanguages = ["en","de"];

const resources = {
  en: {
    translation: translationEN
  },
  de: {
    translation: translationDE
  },
  ko:{
    translation: translationKO
  },
  zh:{
    translation: translationZH
  },
  ru:{
    translation: translationRU
  },
  tr:{
    translation: translationTR
  },
  fr: {
    translation: translationFR
  },
  es: {
    translation: translationES
  }
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng,

    detection: {
      checkWhitelist: true
    },

    debug: false,

    whitelist: availableLanguages,

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
