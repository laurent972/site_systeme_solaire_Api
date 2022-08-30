import { PaletteOptions } from '@material-ui/core/styles/createPalette'
import chroma from 'chroma-js'

const colors = {
  midnightBlue: '#1D286A',
  tomato: '#FF5E4D',
  freeSpeechBlue: '#3F50B5',
  grey: '#888888',
  kournikova: '#FFCB48',
  kournikovaLight: chroma('#FFCB48').alpha(0.4).hex(),
  transparentBlue: '#F0F8FF',
  chambray: '#44566C',
  chambrayLight: chroma('#44566C').alpha(0.2).hex(),
  neonCarrot: '#FF9A2E',
  cornflowerBlue: '#6B83FF',
  whiteSmoke: '#F8F8F8',
  pureWhite: '#FFF',
  pureBlack: '#000',
  gainsboro: '#DADADA',
  ghostWhite: '#F1F3FF',
  lightBlue: '#479DF1',
  echoBlue: '#A4A9C3',
}

export const light: PaletteOptions & { colors: typeof colors } = {
  type: 'light',
  alternate: {
    main: 'rgb(247, 249, 250)',
    dark: '#e8eaf6',
  },
  cardShadow: 'rgba(23, 70, 161, .11)',
  primary: {
    main: '#003867',
    light: '#0076AD',
    dark: '#479DF1',
    contrastText: '#fff',
  },
  secondary: {
    main: '#0076AD',
    light: '#E6EEF2',
    dark: '#f57c00',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  error: {
    main: colors.tomato,
  },
  info: {
    main: '#FFF',
  },
  colors,
  divider: 'rgba(0, 0, 0, 0.12)',
  background: {
    paper: '#fff',
    default: '#fff',
    level2: '#f5f5f5',
    level1: '#fff',
    footer: '#1b1642',
  },
}

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    colors: typeof colors
  }

  // allow configuration using `createMuiTheme`
  interface PaletteOptions {
    colors: typeof colors
  }
}
