import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'
import languageDetector from 'i18next-browser-languagedetector'
import backend from 'i18next-xhr-backend'

i18n
  .use(initReactI18next)
  .use(languageDetector)
  .use(backend)
  .init(() => ({
    debug: true,
    fallbackLng: 'ptbr',
    keySeparator: true,
    defaultNS: 'ptbr',
    ns: 'ptbr',
    fallbackNS: 'ptbr',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
      wait: false,
    },
    backend: {
      loadPath: `${process.env.REACT_APP_VENDOR_URL}/locales/{{lng}}/{{ns}}.json`,
    },
  }))

i18n.changeLanguage('ptbr')

export default i18n
