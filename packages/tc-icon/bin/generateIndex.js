#! /usr/bin/env node

'use strict';

const path = require('path');
const fs = require('fs');
const glob = require('glob');

glob('./!(index)*.js', {}, (err, files) => {
  const stream = fs.createWriteStream('index.js');

  stream.write(`export { default as default } from './src';\n`);

  files.forEach(file => {
    const name = path.basename(file, '.js');

    stream.write(`export { default as ${name} } from './${name}.js'\n`);
  });

  stream.end();

  stream.on('finish', () => {
    console.log('Finished writing index.js.');
    process.exit();
  });

  stream.on('error', error => {
    console.error('Error writing to stream, closing stream: ', error);
    fs.unlinkSync('index.js');
    process.exit(1);
  });
});
