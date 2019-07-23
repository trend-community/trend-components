import React from 'react';
import {
  storiesOf
} from '@storybook/react';
import { withReadme, doc } from 'storybook-readme';
import { withKnobs } from '@storybook/addon-knobs';
import {
  select,
} from '@storybook/addon-knobs/react';

import readme from '../README.md';
import scssReadme from '../scss/README.md';
import Component from './component.story';

storiesOf('Divider', module)
  .addDecorator(withKnobs)
  .add('scss', doc(scssReadme))
  .add(Component.displayName, withReadme(readme, () => {
    const variant = select(
      'Variant',
      ['', 'indent'],
      ''
    );
    const orientation = select(
      'Orientation',
      ['vertical', 'horizontal'],
      'vertical'
    );

    return <Component
      orientation={orientation}
      variant={variant.length ? variant : undefined} />;}
   ));
