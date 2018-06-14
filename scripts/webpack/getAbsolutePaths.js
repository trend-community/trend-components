/**
 * @param {...string} globPatterns One or more portions of a glob pattern to match against.
 *   If more than one pattern is passed, they will be joined with the OS's directory separator character.
 *   The first pattern should either be an absolute path or a path relative to the repository root.
 * @return {!Array<string>} Array of absolute paths to all files that match the full glob pattern.
 */

'use strict';

const glob = require('glob');

const pathResolver = require('../pathResolver')();

function getAbsolutePaths(...globPatterns) {
  return glob.sync(pathResolver.getAbsPath(...globPatterns));
}

module.exports = getAbsolutePaths;
