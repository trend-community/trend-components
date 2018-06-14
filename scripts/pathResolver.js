/**
 * @file Resolve filesystem paths.
 */

'use strict';

const fs = require('fs');
const path = require('path');

function pathResolver() {
  /**
   * Get the repository root absolute path.
   * @return {string}
   */
  function getRepoRootAbsPath() {
    return path.resolve(path.join(__dirname, '../'));
  }

  /**
   * Returns the absolute path resolved from zero or more path parts.
   * @param {...string} relativePathPartsToRoot File system path parts.
   * @return {string}
   */
  function getAbsPath(...relativePathPartsToRoot) {
    const { resolve, join } = path;

    return fs.existsSync(relativePathPartsToRoot[0])
      ? resolve(join(...relativePathPartsToRoot))
      : resolve(join(getRepoRootAbsPath(), ...relativePathPartsToRoot));
  }

  /**
   * Returns the path to a file relative to the given root.
   * @param to
   * @param from
   * @return {string}
   */
  function getRelativePath(to, from = getRepoRootAbsPath()) {
    return path.relative(from, to);
  }

  /**
   * Concatenates the given `pathParts`, separated by an OS-specific directory separator character.
   * @param pathParts
   * @return {string}
   */
  function join(...pathParts) {
    return path.join(...pathParts);
  }

  /**
   * Returns the name of the last file or directory in a path.
   * @param {string} filePath
   * @return {string}
   */
  function getFilename(filePath) {
    return path.basename(filePath);
  }

  /**
   * Removes the file extension from a path.
   * @param {string} filePath
   * @return {string}
   */
  function removeFileExtension(filePath) {
    return filePath.replace(/\.\w+$/, '');
  }

  const api = {
    getRepoRootAbsPath,
    getAbsPath,
    getRelativePath,
    getFilename,
    join,
    removeFileExtension
  };

  function init() {
    return Object.create(api);
  }

  return init();
}

module.exports = pathResolver;
