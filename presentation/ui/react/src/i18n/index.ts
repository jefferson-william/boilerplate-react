import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'
import languageDetector from 'i18next-browser-languagedetector'
import backend from 'i18next-xhr-backend'

i18n
  .use(initReactI18next)
  .use(languageDetector)
  .use(backend)
  .init(
    {
      debug: true,
      lng: 'ptbr',
      fallbackLng: 'ptbr',
      keySeparator: '.',
      ns: 'translation',
      defaultNS: 'translation',
      fallbackNS: 'translation',
      preload: ['ptbr'],
      interpolation: {
        escapeValue: false,
      },
      react: {
        useSuspense: false,
        wait: false,
      },
      backend: {
        loadPath: () => `${process.env.REACT_APP_VENDOR_URL}/locales/{{lng}}/{{ns}}.json`,
      },
    },
    () => {},
  )

export default i18n
