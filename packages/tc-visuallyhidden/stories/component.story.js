import React from 'react';
import { action } from '@storybook/addon-actions';
import Marked from 'storybook-readme/components/Marked';

import Button from 'packages/tc-button/src';
import App from 'packages/tc-icon/src/App';
import md from './component.md';
import VisuallyHidden from '../src';

function ComponentStory() {
  return <React.Fragment>
    <div className="tc-mhl">
      <h2>Visually Hidden</h2>
      <p>Hide an element visually, but keep the element text available to be announced by a screen reader.</p>

      <div className="tc-pal">
        <Button variant="ctab" onClick={action('onClick')}>
          <App {...Button.getIconProps({ className: 'tc-mrn' })} />
          <VisuallyHidden>screen reader access</VisuallyHidden>
        </Button>
      </div>
    </div>
    <Marked md={md} />
  </React.Fragment>
}

ComponentStory.displayName = 'Component';

export default ComponentStory;
