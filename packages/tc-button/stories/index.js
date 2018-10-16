import React from 'react';
import {
  storiesOf
} from '@storybook/react';
import { withReadme, doc } from 'storybook-readme';
import { withKnobs } from '@storybook/addon-knobs'

import readme from '../README.md';
import scssReadme from '../scss/README.md';
import Demo from './demo.story';
// import OverlayStory from './overlay.story';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('scss', doc(scssReadme))
  .add(Demo.displayName, withReadme(readme, () => <Demo />));
