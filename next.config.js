const path = require('path');

module.exports = (phase, { defaultConfig }) => {
  if ('sassOptions' in defaultConfig) {
    defaultConfig['sassOptions'] = {
      //includePaths: ['./styles/'],
      includePaths: [path.join(__dirname, 'styles')],
      prependData: `@use './utilities' as *;`,
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
