import React from 'react';
import {
  storiesOf
} from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs } from '@storybook/addon-knobs';
import {
  array,
  boolean,
  text,
  select
} from '@storybook/addon-knobs/react';

import readme from '../README.md';
import Component from './component.story';

storiesOf('Interactive', module)
  .addDecorator(withKnobs)
  .add(Component.displayName, withReadme(readme, () => {
    const as = select('As: ', ['button', 'span', 'div'], 'button');
    const clickKeys = text('Clickable keys: ', '');
    const defaults = ['Enter' , ' '];
    const disabled = boolean('Disabled', false);
    const focusable = boolean('Focusable', false);

    return <Component
      as={as}
      clickableKeys={clickKeys.length ? clickKeys.split(' ') : defaults}
      disabled={disabled}
      focusable={focusable} />;
    }
  ));
