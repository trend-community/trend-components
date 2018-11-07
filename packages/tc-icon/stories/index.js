import React from 'react';
import {
  storiesOf
} from '@storybook/react';
import { withReadme, doc } from 'storybook-readme';
import { withKnobs } from '@storybook/addon-knobs'

import readme from '../README.md';
import Icons from './icons.story';

storiesOf('Icon', module)
  .addDecorator(withKnobs)
  .add(Icons.displayName, withReadme(readme, () => <Icons />));
