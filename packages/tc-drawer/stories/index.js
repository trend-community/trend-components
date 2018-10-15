import React from 'react';
import {
  storiesOf
} from '@storybook/react';
import { withReadme, doc } from 'storybook-readme';

import readme from '../README.md';
import scssReadme from '../scss/README.md';
import DefaultStory from './default.story';
import OverlayStory from './overlay.story';

storiesOf('Drawer', module)
  .add('scss', doc(scssReadme))
  .add(DefaultStory.displayName, withReadme(readme, () => <DefaultStory />))
  .add(OverlayStory.displayName, withReadme(readme, () => <OverlayStory />));
