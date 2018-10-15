const autoprefixer = require('autoprefixer');
const pathResolver = require('../scripts/pathResolver')();
const cssBundler = require('../scripts/webpack/cssBundler')();

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules.push({
    test: /\.(css|scss)$/,
    use: [
      require.resolve('style-loader'),
      ...cssBundler.createCssLoader().splice(1)
    ]
  });

  const superAlias = { ...defaultConfig.resolve.alias };

  defaultConfig.resolve.alias = {
    ...superAlias,
    packages: pathResolver.getAbsPath('./packages')
  };

  return defaultConfig;
};
