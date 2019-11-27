# Focus trap

A React component that traps focus.

This component is a wrapper for [focus-trap](https://github.com/davidtheclark/focus-trap).

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

const Component = () => {
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
            <button
              onClick={() => setActive(false)}>
              deactivate trap
            </button>
          </p>
        </div>
      </FocusTrap>
    : false;

  return (
    <div className="tc-pal">
      <div className="tc-mbl tc-text-center">
        <button onClick={() => setActive(true)}>
          Set trap
        </button>
        {trap}
      </div>
    </div>
  );
};

ReactDom.render(<Component />, document.getElementById('root'));
```

## <a name="props"></a> Props API

**active**

> `boolean` | Optional, defaults to `true`.

Toggle the activation state of a mounted `FocusTrap`.  By default a `FocusTrap` is activated and deactivated by mounting and unmounting the component.

**paused**

> `boolean` | Optional, defaults to `false`.

See [focus-trap docs](https://github.com/davidtheclark/focus-trap#focustrap--createfocustrapelement-createoptions) to pause and unpause a `FocusTrap`.

**as**

> `string` | Optional, defaults to `div`

An HTML tag for `FocusTrap` DOM node.

**shouldTrap**

> `boolean` | Optional, defaults to `true`.

This is an escape hatch if the `useFocusTrap` is being composed with another component.

### FocusTrap options props

Remaining props are the options for the [focus-trap createOptions](https://github.com/davidtheclark/focus-trap#focustrap--createfocustrapelement-createoptions).

**onActivate**

> `function` | Optional. defaults to noop

A function that will be called when the focus trap activates.

**onDeactivate**

> `function` | Optional, defaults to noop

A function that will called when the focus trap deactivates.
**initialFocus**

> `element|string|function` | Optional, defaults to `null`.

By default, when a focus trap is activated the first element in the focus trap's tab order will receive focus. With this option you can specify a different element to receive that initial focus. Can be a DOM node, or a selector string (which will be passed to document.querySelector() to find the DOM node), or a function that returns a DOM node.

**fallbackFocus**

> `element|string|function` | Optional, defaults to `null`.

By default, an error will be thrown if the focus trap contains no elements in its tab order. With this option you can specify a fallback element to programmatically receive focus if no other tabbable elements are found. For example, you may want a popover's <div> to receive focus if the popover's content includes no tabbable elements. Make sure the fallback element has a negative tabindex so it can be programmatically focused. The option value can be a DOM node, a selector string (which will be passed to document.querySelector() to find the DOM node), or a function that returns a DOM node.

**escapeDeactivates**

> `boolean` | Optional, defaults to `true`.

If false, the Escape key will not trigger deactivation of the focus trap. This can be useful if you want to force the user to make a decision instead of allowing an easy way out.

**clickOutsideDeactivates**

> `boolean` | Optional, defaults to `false`.

If `true`, a click outside the focus trap will deactivate the focus trap and allow the click event to do its thing.

**returnFocusOnDeactivate**

> `boolean` | Optional, defaults to `true`

If `false`, when the trap is deactivated, focus will not return to the element that had focus before activation.

**setReturnFocus**

> `element|string|function` | Optional, defaults to `null`.

By default, focus trap on deactivation will return to the element that was focused before activation. With this option you can specify another element to programmatically receive focus after deactivation. Can be a DOM node, or a selector string (which will be passed to document.querySelector() to find the DOM node), or a function that returns a DOM node.

**allowOutsideClick**

> `function` | Optional, defaults to `null`.

 If set and returns `true`, a click outside the focus trap will not be prevented, even when `clickOutsideDeactivates` is `false`.
