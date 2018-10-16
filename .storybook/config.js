import path from 'path';
import React from 'react';
import {
  configure,
  storiesOf
} from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

import './styles.scss';

const req = require.context(
  '../packages',
  true,
  /^((?!node_modules).)*\/stories\/index.js$/
);

setOptions({
  name: 'TREND Components',
  url: 'https://github.com/trend-community/trend-components',
  // showAddonPanel: true,
  addonPanelInRight: true
})

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
