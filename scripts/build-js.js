'use strict';

const execSync = require('child_process').execSync;
const pathResolver = require('./pathResolver')();

const babel = `${pathResolver.getRepoRootAbsPath()}/node_modules/.bin/babel`;

const exec = (command, options) => execSync(command, {
  stdio: 'inherit',
  evn: { ...process.env, ...options }
});

const ignoreGlobs = '**/*.spec.js';

console.log('\nBuilding package common js module...');

exec(`${babel} --root-mode upward src -d . --ignore ${ignoreGlobs}`, {
  BABEL_ENV: 'cjs'
});
