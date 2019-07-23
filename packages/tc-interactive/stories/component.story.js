import React from 'react';
import { action } from '@storybook/addon-actions';
import Marked from 'storybook-readme/components/Marked';

import Interactive from '../src';

function ComponentStory({ as, clickableKeys, disabled, focusable }) {
  const ref = React.useRef();

  React.useEffect(() => {
    console.log('output: ', ref.current);
  });

  return <React.Fragment>
    <div className="tc-mhl">
      <h2>Interactive</h2>
      <p>Implements the accessibility features of a interactive element when not rendered as its native element.</p>
      <div>
        <Interactive
          as={as}
          clickableKeys={clickableKeys}
          disabled={disabled}
          focusable={focusable}
          ref={ref}
          onClick={() => console.log('onClick called.')}>
          Interactive
        </Interactive>
      </div>
    </div>
  </React.Fragment>
}

ComponentStory.displayName = 'Component';

export default ComponentStory;
