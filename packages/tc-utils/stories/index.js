import React from 'react';
import {
  storiesOf
} from '@storybook/react';
import { doc } from 'storybook-readme';

import readme from '../README.md';

storiesOf('Utils', module)
  .add('readme', doc(readme));

