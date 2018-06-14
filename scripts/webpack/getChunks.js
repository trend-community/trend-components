/**
 * Finds all files that match the given path glob pattern and returns a Webpack entry object containing each file as a
 * separate "chunk" (key/value pair).
 *
 * The "name" (key) of each chunk is the chunk's input file path (relative to the project root) without a file
 * extension, and the value is the absolute path to the input file.
 *
 * Import-only files (i.e., excludes file names w/ a leading underscore).
 *
 * @example get CSS chunks:
 *
 *  getChunks({filePathPattern: '**' + '/*.scss'})
 *  {
 *    "button": "/absolute/path/to/tc-repo/demos/button.scss",
 *    "base": "/absolute/path/to/tc-web-repo/demos/base.scss",
 *    ...
 *  }
 *
 * @param {string} filePathPattern
 * @param {string=} inputDirectory
 * @return {!Object<string, string>} Chunk names object to their absolute paths
 */

'use strict';

const glob = require('glob');

const pathResolver = require('../pathResolver')();
const getAbsolutePaths = require('./getAbsolutePaths');

function getChunks({
  filePathPattern,
  inputDirectory = pathResolver.getRepoRootAbsPath() }) {
  const inputDirnamePath = pathResolver.getAbsPath(inputDirectory);

  return getAbsolutePaths(inputDirectory, filePathPattern)
    .reduce((result = {}, absPathToInputFile) => {
      const relativePath = pathResolver
        .getRelativePath(absPathToInputFile, inputDirnamePath);
      const relativePathNoExtension = pathResolver
        .removeFileExtension(relativePath);
      const filename = pathResolver.getFilename(absPathToInputFile);

      result[relativePathNoExtension] = absPathToInputFile;

      return result;
    }, {});
}

module.exports = getChunks;
