import React from 'react';
import {
  storiesOf
} from '@storybook/react';
import { withReadme, doc } from 'storybook-readme';
import { withKnobs } from '@storybook/addon-knobs';
import {
  number,
  select,
  text
} from '@storybook/addon-knobs/react';

import readme from '../README.md';
import Icons from './icons.story';

storiesOf('Icon', module)
  .addDecorator(withKnobs)
  .add(Icons.displayName, withReadme(readme, () => {
    const label = 'Size';
    const defaultValue = 2;
    const options = {
       range: true,
       min: 1,
       max: 10,
       step: 1,
    };

    const size = number(label, defaultValue, options);
    const unit = select('Unit', ['rem', 'em'], 'em');
    const color = text('Color', 'rgba(51, 51, 51, 0.87)');

    return <Icons size={size} style={{ color }} unit={unit} />;
   }));
