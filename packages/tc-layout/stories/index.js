import React from 'react';
import {
  storiesOf
} from '@storybook/react';
import { withReadme } from 'storybook-readme';

import readme from '../README.md';
import DemoStory from './demo.story';

storiesOf('Layout', module)
  .add(DemoStory.displayName, withReadme(readme, () => <DemoStory />));
