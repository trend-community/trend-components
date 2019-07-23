import React from 'react';

import '../styles.scss';
import Divider from '../src';

function ComponentStory({ orientation, variant, ...props }) {
  return <div className="tc-mhl">
    <h2>Dividers</h2>

    <div className="tc-pal tc-background-concrete-100">
      <Divider
        orientation={orientation}
        variant={variant}
        style={{ borderBottomColor: '#333' }}
      />
    </div>
  </div>;
}

ComponentStory.displayName = 'Component';

export default ComponentStory;
