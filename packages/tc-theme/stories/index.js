import React from 'react';
import {
  storiesOf
} from '@storybook/react';
import { withReadme } from 'storybook-readme';

import readme from '../README.md';
import DefaultStory from './default.story';

storiesOf('Theme', module)
  .add('scss', withReadme(readme, () => <DefaultStory />));
