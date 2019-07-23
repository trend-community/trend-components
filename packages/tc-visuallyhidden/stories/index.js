import React from 'react';
import {
  storiesOf
} from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs } from '@storybook/addon-knobs';

import readme from '../README.md';
import Component from './component.story';

storiesOf('VisuallyHidden', module)
  .addDecorator(withKnobs)
  .add(Component.displayName, withReadme(readme, () => {
    return <Component />;}
  ));
