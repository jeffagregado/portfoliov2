module.exports = (phase, { defaultConfig }) => {
  if ('sassOptions' in defaultConfig) {
    defaultConfig['sassOptions'] = {
      includePaths: ['./styles/utilities'],
      prependData: `@use './styles/utilities' as *;`,
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
