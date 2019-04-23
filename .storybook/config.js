import path from 'path';
import React from 'react';
import {
  addParameters,
  configure
} from '@storybook/react';

import './styles.scss';

addParameters({
  options: {
    panelPosition: 'right'
  }
});

function loadStories() {
  const req = require.context(
    '../packages',
    true,
    /^((?!node_modules).)*\/stories\/index.js$/
  );

  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
