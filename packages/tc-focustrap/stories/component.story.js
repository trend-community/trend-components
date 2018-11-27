import React, { Fragment } from 'react';

import Button from '../../tc-button';
import FocusTrap from '../src';

class Demo extends React.Component {
  state = {
    activeTrap: false
  }

  mountTrap = () => {
    this.setState({ activeTrap: true });
  }

  unmountTrap = () => {
    this.setState({ activeTrap: false });
  }

  render() {
    const trap = this.state.activeTrap
      ? <FocusTrap
          focusTrapOptions={{
            onDeactivate: this.unmountTrap
          }}>
          <div style={{
            border: '1px solid rgba(0, 0, 0, 0.2',
            padding: '1rem'
          }}>
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
              <Button onClick={this.unmountTrap} variant="ctab" size="compact">
                deactivate trap
              </Button>
            </p>
          </div>
        </FocusTrap>
      : false;

    return (
      <div className="tc-pal">
        <div className="tc-mbl tc-text-center">
          <Button onClick={this.mountTrap} variant="ctab">set trap</Button>
        </div>
        {trap}
      </div>
    );
  }
}

function Story() {
  return <Demo />;
}

Story.displayName = 'Component';

export default Story;
