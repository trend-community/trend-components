/**
 * @fileoverview Removes all *.css.js files from the output directory after
 * Webpack has finished compiling.
 *
 * Webpack emits bundles as JavaScript files - even CSS. To get a plain .css
 * file, we have to use `mini-css-extract-plugin` to yank the CSS out of the
 * .css.js file and write it to a .css file.
 */

'use strict';

const fsx = require('fs-extra');
const getAbsolutePaths = require('./getAbsolutePaths');

function pluginCssClean({ cleanDirRelativePath } = {}) {
  function apply(compiler) {
    compiler.plugin('done', () => remove.call(this));
  }

  function remove() {
    // The trailing `*` at the end of the glob pattern is needed to clean up
    // sourcemap files (e.g., `foo.css.js.map`).
    getAbsolutePaths(this.cleanDirRelativePath, '**/*.css.js*')
      .forEach((absolutePath) => {
        fsx.removeSync(absolutePath);
      });
  }

  const api = {
    apply
  };

  function init() {
    const cssClean = Object.create(api);
    /** @type {string} */
    cssClean.cleanDirRelativePath = cleanDirRelativePath;

    return cssClean;
  }

  return init();
}

module.exports = pluginCssClean;
