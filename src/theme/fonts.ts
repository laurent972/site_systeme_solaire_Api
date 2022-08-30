import { declareFont, defineFont, Font, FontStyles, FontWeights } from '../utils/FontUtils'

enum FontKeys {
  PoppinsLight = 'PoppinsLight',
  PoppinsRegular = 'PoppinsRegular',
  PoppinsMedium = 'PoppinsMedium',
  PoppinsSemiBold = 'PoppinsSemiBold',
  PoppinsItalic = 'PoppinsItalic',
  PoppinsBold = 'PoppinsBold',
  LatoRegular = 'LatoRegular',
}

export const declarations: { [key in FontKeys]: Font } = {
  PoppinsRegular: {
    basename: 'Poppins-Regular',
    fontFamily: 'Poppins',
    fontWeight: 400,
    fontStyle: FontStyles.normal,
    fallback: 'sans-serif',
  },
  PoppinsLight: {
    basename: 'Poppins-Light',
    fontFamily: 'Poppins',
    fontWeight: 300,
    fontStyle: FontStyles.normal,
    fallback: 'sans-serif',
  },
  PoppinsMedium: {
    basename: 'Poppins-Medium',
    fontFamily: 'Poppins',
    fontWeight: 500,
    fontStyle: FontStyles.normal,
    fallback: 'sans-serif',
  },
  PoppinsSemiBold: {
    basename: 'Poppins-SemiBold',
    fontFamily: 'Poppins',
    fontWeight: 600,
    fontStyle: FontStyles.normal,
    fallback: 'sans-serif',
  },
  PoppinsItalic: {
    basename: 'Poppins-Italic',
    fontFamily: 'Poppins Italic',
    fontWeight: FontWeights.regular,
    fontStyle: FontStyles.italic,
    fallback: 'sans-serif',
  },
  PoppinsBold: {
    basename: 'Poppins-Bold',
    fontFamily: 'Poppins',
    fontWeight: 700,
    fontStyle: FontStyles.normal,
    fallback: 'sans-serif',
  },
  LatoRegular: {
    basename: 'Lato-Regular',
    fontFamily: 'Lato',
    fontWeight: FontWeights.regular,
    fontStyle: FontStyles.normal,
    fallback: 'sans-serif',
  },
}

export const fontsFaces = (): string => Object.values(declarations).map(declareFont).join(' ')

const fonts: { [key in FontKeys]: string } = {
  PoppinsRegular: defineFont(declarations.PoppinsRegular),
  PoppinsLight: defineFont(declarations.PoppinsLight),
  PoppinsMedium: defineFont(declarations.PoppinsMedium),
  PoppinsSemiBold: defineFont(declarations.PoppinsSemiBold),
  PoppinsItalic: defineFont(declarations.PoppinsItalic),
  PoppinsBold: defineFont(declarations.PoppinsBold),
  LatoRegular: defineFont(declarations.LatoRegular),
}

export default fonts
