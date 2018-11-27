# Focus trap

A React component that traps focus.

This component is a wrapper for [focus-trap](https://github.com/davidtheclark/focus-trap) and a manual fork of [focus-trap-react](https://github.com/davidtheclark/focus-trap-react) tailored for trend-components needs.

* [Installation](#installation)
* [Basic Usage](#usage)
* [props](#props)

## <a name="installation"></a> Installation

```bash
## Has peer dependency with react and react-dom
npm i react react-dom
npm i @trend/focustrap
```

## <a name="usage"></a> Basic Usage

With a module bundler like [webpack](https://webpack.js.org/), use as you would anything else:

```javascript
import React from 'react';
import FocusTrap from '@trend/focustrap';

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
              <button onClick={this.unmountTrap}>
                deactivate trap
              </button>
            </p>
          </div>
        </FocusTrap>
      : false;

    return (
      <div className="tc-pal">
        <div className="tc-mbl">
          <button onClick={this.mountTrap}>toggle trap</button>
        </div>
        {trap}
      </div>
    );
  }
}
```

## <a name="props"></a> Props

### focusTrapOptions

> `object` | optional

See [focus-trap createOptions](https://github.com/davidtheclark/focus-trap#focustrap--createfocustrapelement-createoptions) for available options.

### active

> `boolean` | optional

Toggle the activation state of a mounted `FocusTrap`.  By default a `FocusTrap` is activated and deactivated by mounting and unmounting the component.

### paused

> `boolean` | optional

See (focus-trap docs)(https://github.com/davidtheclark/focus-trap#focustrap--createfocustrapelement-createoptions) to pause and unpause a `FocusTrap`.

### tag

> `string` | Optional, defaults to `div`

An HTML tag for `FocusTrap` DOM node.

### ...rest

All additional props are passed through to the rendered DOM element.
