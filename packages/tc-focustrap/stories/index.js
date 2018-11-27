import React from 'react';
import {
  storiesOf
} from '@storybook/react';
import { withReadme, doc } from 'storybook-readme';

import readme from '../README.md';
import ComponentStory from './component.story';

storiesOf('FocusTrap', module)
  .add(
    ComponentStory.displayName,
    withReadme(readme, () => <ComponentStory />)
  );
