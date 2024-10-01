import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import translationEN from './en/translation.json'
import translationHE from './he/translation.json'

const resources = {
  en: {
    translation: translationEN,
  },
  he: {
    translation: translationHE,
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // Default language
  fallbackLng: 'en', // Fallback language if the selected one is not available
  interpolation: {
    escapeValue: false, // React already escapes by default
  },
})

export default i18n
