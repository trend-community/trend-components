import React from 'react';
import {
  storiesOf
} from '@storybook/react';
import { doc } from 'storybook-readme';

import readme from '../README.md';

storiesOf('State', module)
  .add('scss', doc(readme));
