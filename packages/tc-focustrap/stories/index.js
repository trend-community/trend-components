import React from 'react';
import { withReadme, doc } from 'storybook-readme';

import Button from '../../tc-button/src';
import FocusTrap from '../src';
import readme from '../README.md';

export default {
  title: 'FocusTrap',
  component: FocusTrap,
  decorators: [withReadme(readme)]
}

export const Component = () => {
  const [active, setActive] = React.useState(false);
   const trap = active
    ? <FocusTrap
        onDeactivate={() => setActive(false)}>
        <div className="tc-mtl tc-pal tc-border tc-border-concrete-500">
          <p>
            Here is a focus trap
            {' '}
            <a href="#">with</a>
            {' '}
            <a href="#">some</a>
            {' '}
            <a href="#">focusable</a>
            {' '}
            parts.
          </p>
          <p>
            <Button
              onClick={() => setActive(false)}
              variant="ctab" size="compact">
              deactivate trap
            </Button>
          </p>
        </div>
      </FocusTrap>
    : false;

  return (
    <div className="tc-pal">
      <div className="tc-mbl tc-text-center">
        <Button onClick={() => setActive(true)} variant="ctab">
          Set trap
        </Button>
        {trap}
      </div>
    </div>
  );
};
