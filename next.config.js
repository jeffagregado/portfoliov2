module.exports = (phase, {defaultConfig}) => {
    if ('sassOptions' in defaultConfig) {
        defaultConfig['sassOptions'] = {
            includePaths: ['./styles'],
            prependData: `@import "./styles/Utilities/_variables.scss";`,
        }
    }
    return defaultConfig;
}