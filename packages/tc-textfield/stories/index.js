import React from 'react';
import {
  storiesOf
} from '@storybook/react';
import { withReadme, doc } from 'storybook-readme';
import { withKnobs } from '@storybook/addon-knobs'

import readme from '../README.md';
import scssReadme from '../scss/README.md';
import Component from './component.story';

storiesOf('TextField', module)
  .addDecorator(withKnobs)
  .add('scss', doc(scssReadme))
  .add(Component.displayName, withReadme(readme, () => <Component />));
