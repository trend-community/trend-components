import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs } from '@storybook/addon-knobs';
import { array, boolean, text, select } from '@storybook/addon-knobs/react';

import readme from '../README.md';
import Component from './component.story';

storiesOf('Disclosure', module)
  .addDecorator(withKnobs)
  .add(
    Component.displayName,
    withReadme(readme, () => {
      const as = select('As: ', ['button', 'span', 'div'], 'div');

      return <Component as={as} />;
    })
  );
