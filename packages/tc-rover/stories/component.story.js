import React from 'react';

import Button from '../../tc-button/src';
import Rover, { useRoverState } from '../src';

function ComponentStory({ disableRover2, infinite, orientation }) {
  const Demo = () => {
    let state = useRoverState({ infinite, orientation });
    const ref1 = React.useRef(null);

    React.useEffect(() => {
      ref1.current.focus();
    }, []);

    return (
      <>
        <div className="tc-flex tc-flex-between" role="group">
          <Rover {...state} ref={ref1}>Rover 1</Rover>
          <Rover {...state} disabled={disableRover2}>Rover 2</Rover>
          <Rover {...state}>Rover 3</Rover>
          <Rover {...state}>Rover 4</Rover>
          <Rover {...state}>Rover 5</Rover>
        </div>
        <div className="tc-mtl tc-flex tc-flex-between">
          <Button
            onClick={state.first}
            variant='ghost'>First</Button>
          <Button
            onClick={state.previous}
            variant='ctab'>Previous</Button>
          <Button
            onClick={state.next}
            variant='ctab'>Next</Button>
          <Button
            onClick={state.last}
            variant='ghost'>Last</Button>
        </div>
      </>
    );
  };

  return <div className="tc-mhl">
    <h2>Rover</h2>

    <Demo />
  </div>;
}

ComponentStory.displayName = 'Component';

export default ComponentStory;
