export enum FontWeights {
  thin = 100,
  extraLight = 200,
  light = 300,
  regular = 400,
  medium = 500,
  semiBold = 600,
  bold = 700,
  extraBold = 800,
  black = 900,
}

export enum FontStyles {
  normal = 'normal',
  italic = 'italic',
  oblique = 'oblique',
}

export type Font = {
  basename: string
  fontFamily: string
  fontWeight?: FontWeights
  fontStyle?: FontStyles
  fallback?: string
}

export const defineFont = (font: Font): string => `
    font-family: "${font.fontFamily}", ${font.fallback || 'sans-serif'};
    font-weight: ${font.fontWeight || FontWeights.regular};
    font-style: ${font.fontStyle || FontStyles.normal};
  `

export const declareFont = ({ basename, fontFamily, fontWeight, fontStyle }: Font): string => {
  const path = `/fonts/${basename}/${basename}`

  return `
      @font-face {
        font-family: "${fontFamily}";
        font-display: swap;
        font-weight: ${fontWeight || FontWeights.regular};
        font-style: ${fontStyle || FontStyles.normal};
        src: url("${path}.woff2") format("woff2"), 
          url("${path}.woff") format("woff");
      }
    `
}
