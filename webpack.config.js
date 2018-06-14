'use strict';

const pathResolver = require('./scripts/pathResolver')();
const getAbsolutePaths = require('./scripts/webpack/getAbsolutePaths');
const cssBundler =  require('./scripts/webpack/cssBundler')();

const OUTPUT = {
  fsDirAbsolutePath: pathResolver.getAbsPath('./build'),
};

module.exports = [
  cssBundler.createFullBundle({ output: OUTPUT }),
  cssBundler.createIndividualBundles({ output: OUTPUT })
];
