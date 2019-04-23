const autoprefixer = require('autoprefixer');
const pathResolver = require('../scripts/pathResolver')();
const cssBundler = require('../scripts/webpack/cssBundler')();

module.exports = async ({ config }) => {
  config.module.rules.push({
    test: /\.(css|scss)$/,
    use: [
      require.resolve('style-loader'),
      ...cssBundler.createCssLoader().splice(1)
    ]
  });

  const superAlias = { ...config.resolve.alias };

  config.resolve.alias = {
    ...superAlias,
    packages: pathResolver.getAbsPath('./packages')
  };

  return config;
};
