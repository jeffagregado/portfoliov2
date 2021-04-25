const path = require('path')

module.exports = (phase, { defaultConfig }) => {
  if ('sassOptions' in defaultConfig) {
    defaultConfig['sassOptions'] = {
      //includePaths: ['./styles/'],
      includePaths: [path.join(__dirname, 'styles')],
      prependData: `@import './styles/utilities/index';`,
    }
  }
  return defaultConfig
}

/* module.exports = (phase, { defaultConfig }) => {
    if ('sassOptions' in defaultConfig) {
      defaultConfig['sassOptions'] = {
        includePaths: ['./styles'],
        prependData: `@import "./styles/utilities/_variables.scss";`,
      }
    }
    return defaultConfig
  } */
