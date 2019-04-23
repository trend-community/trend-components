import React from 'react';
import {
  storiesOf
} from '@storybook/react';
import { withReadme, doc } from 'storybook-readme';
import { withKnobs } from '@storybook/addon-knobs';
import {
  array,
  boolean,
  text,
  select
} from '@storybook/addon-knobs/react';


import readme from '../README.md';
import scssReadme from '../scss/README.md';
import Component from './component.story';

storiesOf('Topbar', module)
  .addDecorator(withKnobs)
  .add('scss', doc(scssReadme))
  .add(Component.displayName, withReadme(readme, () => {
    const compact = boolean('Compact', false);
    const fixed = boolean('Fixed', false);
    const fixedScroll = boolean('Fixed scroll', false);
    const tall = boolean('Tall', false);

    return <Component
      compact={compact}
      fixed={fixed}
      fixedScroll={fixedScroll}
      tall={tall} />;
  }));
