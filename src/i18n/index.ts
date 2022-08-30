import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import dayjs from 'dayjs'
import localeData from 'dayjs/plugin/localeData'
import weekOfYear from 'dayjs/plugin/weekOfYear'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import numeral from 'numeral'

import 'dayjs/locale/fr'
import 'numeral/locales/fr'

import fr from './fr.json'

export const resources = {
  fr,
} as const

i18n.use(initReactI18next).init({
  resources,
  lng: 'fr',
  interpolation: {
    escapeValue: false,
    format: (value, format) => {
      if (format === 'uppercase') {
        return value.toUpperCase()
      }
      if (value instanceof Date) {
        return dayjs(value).format(format)
      }
      if (!Number.isNaN(value) && format) {
        return numeral(value).format(format)
      }
      return value
    },
  },
})

dayjs.extend(customParseFormat)
dayjs.extend(weekOfYear)
dayjs.extend(localeData)
dayjs.locale('fr')

numeral.locale('fr')

export default i18n
