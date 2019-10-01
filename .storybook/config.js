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

configure(
  require.context(
    '../packages',
    true,
    /^((?!node_modules).)*\/stories\/index.js$/
  ),
  module
);
