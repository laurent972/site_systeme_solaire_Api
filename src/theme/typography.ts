import { TypographyOptions } from '@material-ui/core/styles/createTypography'

const typography: TypographyOptions = {
  fontFamily: ['Poppins', 'sans-serif'].join(','),
  fontSize: 13,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  h1: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '3.2rem',
    fontWeight: 700,
    lineHeight: 0.9,
  },
  h2: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '2.8rem',
    fontWeight: 500,
    lineHeight: 1.25,
    textTransform: 'uppercase',
  },
  h3: {
    fontFamily: 'Poppins, serif',
    fontSize: '2.4rem',
    fontWeight: 600,
    lineHeight: 1.4,
  },
  h4: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '1.8rem',
    fontWeight: 600,
    lineHeight: 1.4,
  },
  h5: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '1.6rem',
    fontWeight: 600,
    lineHeight: 1.4,
  },
  h6: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '1.4rem',
    fontWeight: 600,
    lineHeight: 1.25,
  },
  h7: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '1.4rem',
    fontWeight: 400,
    lineHeight: 1.25,
    fontStyle: 'normal',
  },
  body1: {
    fontFamily: 'Lato, sans-serif',
    fontSize: '1.6rem',
    lineHeight: '160%',
  },
  body2: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '1.2rem',
  },
  callToAction: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '1.4rem',
    fontWeight: 600,
    lineHeight: 1.25,
  },
  largeRegular: {
    fontFamily: 'Poppins',
    fontSize: '1.8rem',
    fontWeight: 400,
    lineHeight: 1.6,
  },
  largeBold: {
    fontFamily: 'Poppins',
    fontSize: '1.8rem',
    fontWeight: 600,
    lineHeight: 1.6,
  },
  mediumRegular: {
    fontFamily: 'Lato, sans-serif',
    fontSize: '1.6rem',
    fontWeight: 400,
    lineHeight: 1.75,
  },
  mediumCTA: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '1.6rem',
    fontWeight: 500,
    lineHeight: 1.4,
  },
  mediumStrong: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '1.6rem',
    fontWeight: 600,
    lineHeight: 1.75,
  },
  smallRegular: {
    fontFamily: 'Lato, sans-serif',
    fontSize: '1.6rem',
    fontWeight: 400,
    lineHeight: 1.4,
  },
  smallBold: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '1.4rem',
    fontWeight: 600,
    lineHeight: 1,
    letterSpacing: '0.05rem',
  },
  smallStrong: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '1.4rem',
    fontWeight: 600,
    lineHeight: 1.4,
  },
  tinySmall: {
    fontFamily: 'Lato, sans-serif',
    fontSize: '1.4rem',
    fontWeight: 400,
    lineHeight: 1.4,
  },
  tinyRegular: {
    fontFamily: 'Lato, sans-serif',
    fontSize: '1.2rem',
    fontWeight: 400,
    lineHeight: 1.4,
  },
  tinyStrong: {
    fontFamily: 'Lato, sans-serif',
    fontSize: '1rem',
    fontWeight: 700,
    lineHeight: 1.4,
  },
  big: {
    fontFamily: 'Lato, sans-serif',
    fontSize: '1.8rem',
    fontWeight: 400,
    lineHeight: 1.5,
  },
  micro: {
    fontFamily: 'Lato, sans-serif',
    fontSize: '0.9rem',
    fontWeight: 400,
    lineHeight: 1.5,
  },
}

export default typography

declare module '@material-ui/core/styles/createTypography' {
  interface Typography {
    h1: React.CSSProperties
    h2: React.CSSProperties
    h3: React.CSSProperties
    h4: React.CSSProperties
    h5: React.CSSProperties
    h6: React.CSSProperties
    h7: React.CSSProperties
    body1: React.CSSProperties
    body2: React.CSSProperties
    callToAction: React.CSSProperties
    largeRegular: React.CSSProperties
    largeBold: React.CSSProperties
    mediumRegular: React.CSSProperties
    mediumCTA: React.CSSProperties
    mediumStrong: React.CSSProperties
    smallBold: React.CSSProperties
    smallRegular: React.CSSProperties
    smallStrong: React.CSSProperties
    tinySmall: React.CSSProperties
    tinyRegular: React.CSSProperties
    tinyStrong: React.CSSProperties
    big: React.CSSProperties
    micro: React.CSSProperties
  }

  // allow configuration using `createMuiTheme`
  interface TypographyOptions {
    h1: React.CSSProperties
    h2: React.CSSProperties
    h3: React.CSSProperties
    h4: React.CSSProperties
    h5: React.CSSProperties
    h6: React.CSSProperties
    h7: React.CSSProperties
    body1: React.CSSProperties
    body2: React.CSSProperties
    callToAction: React.CSSProperties
    largeRegular?: React.CSSProperties
    largeBold?: React.CSSProperties
    mediumRegular: React.CSSProperties
    mediumCTA: React.CSSProperties
    mediumStrong: React.CSSProperties
    smallBold: React.CSSProperties
    smallRegular: React.CSSProperties
    smallStrong: React.CSSProperties
    tinySmall: React.CSSProperties
    tinyRegular: React.CSSProperties
    tinyStrong: React.CSSProperties
    big: React.CSSProperties
    micro: React.CSSProperties
  }
}

declare module '@material-ui/core/Typography/Typography' {
  interface TypographyPropsVariantOverrides {
    h1: true
    h2: true
    h3: true
    h4: true
    h5: true
    h6: true
    h7: true
    body1: true
    body2: true
    button: true
    callToAction: true
    largeRegular: true
    largeBold: true
    mediumRegular: true
    mediumCTA: true
    mediumStrong: true
    smallBold: true
    smallRegular: true
    smallStrong: true
    tinySmall: true
    tinyRegular: true
    tinyStrong: true
    big: true
    micro: true
  }
}
