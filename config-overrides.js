const { override } = require('customize-cra')
const path = require('path')

const addSvgSpriteLoader = () => (config) => {
  const loaders = config.module.rules.find((rule) => Array.isArray(rule.oneOf)).oneOf
  // exclude icons from this rule
  if (loaders) {
    loaders.exclude = path.resolve(__dirname, 'src/components/Icon')
  }
  // custom rule for icon svg
  loaders.unshift({
    test: /\.svg$/,
    include: path.resolve(__dirname, 'src/components/Icon'),
    use: [
      {
        loader: 'svg-sprite-loader',
        options: {
          symbolId: 'icon_[name]',
        },
      },
      {
        loader: 'svgo-loader',
        options: {
          plugins: ['removeTitle', 'cleanupIDs', 'removeStyleElement'],
        },
      },
    ],
  })

  return config
}

module.exports = override(addSvgSpriteLoader())
