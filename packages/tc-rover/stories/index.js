import React from 'react';
import {
  storiesOf
} from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs } from '@storybook/addon-knobs';
import {
  boolean,
  select,
} from '@storybook/addon-knobs/react';

import readme from '../README.md';
import Component from './component.story';

storiesOf('Rover', module)
  .addDecorator(withKnobs)
  .add(Component.displayName,
    withReadme(readme,
    () => {
      const disableRover2 = boolean('Disable Rover 2', false);
      const infinite = boolean('Infinite', false);
      const orientation = select(
        'Orientation',
        ['', 'vertical', 'horizontal'],
        ''
      );

      return <Component
        disableRover2={disableRover2}
        infinite={infinite}
        orientation={orientation}
      />;
    }
  ));
