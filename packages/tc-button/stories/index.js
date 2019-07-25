import React from 'react';
import {
  storiesOf
} from '@storybook/react';
import { withReadme, doc } from 'storybook-readme';
import { withKnobs } from '@storybook/addon-knobs'
import {
  array,
  boolean,
  text,
  select
} from '@storybook/addon-knobs/react';

import readme from '../README.md';
import scssReadme from '../scss/README.md';
import Demo from './demo.story';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('scss', doc(scssReadme))
  .add(Demo.displayName, withReadme(readme, () => {
    const accent = boolean('Use accent', false);
    const disabled = boolean('Disabled', false);
    const size = select(
      'Size',
      ['', 'compact'],
      ''
    );
    const variants = select(
      'Variants',
      ['', 'ctab', 'flat', 'ghost']
    );
    const type = select(
      'Type',
      ['button', 'submit', 'reset'],
      'button'
    );
    const label = text('Label', 'button');
    const withIcon = boolean('With icon', false);

    return <Demo
      accent={accent}
      disabled={disabled}
      label={label}
      size={size.length ? size : undefined}
      type={type}
      variants={variants}
      withIcon={withIcon} />;
   }));
