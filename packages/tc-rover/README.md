# Rover

[React](https://reactjs.org/) component that implements the [WAI-ARIA Roving tabindex](https://www.w3.org/TR/wai-aria-practices-1.1/#kbd_roving_tabindex).

The **roving tabindex** is used to manage focus in a composite UI component.

- [Installation](#installation)
- [Basic Usage](#usage)
- [Props API](#props)

## <a name="installation"></a> Installation

```bash
## Has peer dependency with react and react-dom
npm i @trend/rover
```

## <a name="usage"></a> Basic Usage

With a module bundler like [webpack](https://webpack.js.org/), use as you would anything else:

```javascript
// Using ES6 modules.
import React from 'react';
import ReactDom from 'react-dom';

import Disclosure, { useRoverState } from '@trend/rover';
import Button from '@trend/button'

function Demo() {
  const state = useRoverState();

  return (
    <div role="group">
      <Rover {...state} as={Button}>Button 1</Rover>
      <Rover {...state} as={Button}>Button 2</Rover>
      <Rover {...state} as={Button}>Button 3</Rover>
      <Rover {...state} as={Button}>Button 4</Rover>
    </div>
  );
}

ReactDom.render(<Demo />, document.getElementById('root'));
```

## <a name="props"></a> Props API

### Rover

**as**

> `string || Component` | Optional. Defaults to `button`.

Change the underlying element.

**disabled**

> `boolean` | Optional.

Indicates whether the element is disabled or not [MDN](https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XUL/Attribute/disabled).  Inherited from **@trend/interactive**.

**focusable**

> `boolean` | Optional.

Allow an element to obtain `focus` while being disabled.  Inherited from **@trend/interactive**.

**tabStopId**

> `string` | Optional.

A custom element ID to register.

### useRoverState

**currentId**

> `string` | Optional.  Defaults to `null`.

The currently focused element.

**first**

> `function` | `() => void`

Move the focus to the first element in the list.

**infinite**

> `boolean` | Optional. Defaults to `false`.

Will stop at end or beginning of list while moving through items, else will move to first item when moving from last item, or will jump to last item when reverse moving from first item.  Same behaviour when applied with directional keys.

**last**

> `function` | `() => void`

Move the focus to the last item in the list.

**move**

> `function` | `(id|null) => void`

Move the focus to the specificed element ID in the list.

**next**

> `function` | `() => void`

Move the focus to the next element in the list.

**orientation**

> `string` | Optional. Can be one of `vertical|horizonatal|undefined`.  Defaults to `undefined`.

Specify which directional keys to use.

**previous**

> `function` | `() => void`

Shift the focus to the prevous element.

**previousId**

> `string` | Internal.

Preserves the element ID of the previously focused element, if there was one.

**register**

> `function` | `(id, ref) => void`

Register the element ref and ID.

**reset**

> `function` | `() => void`

Reset the state.

**tabStops**

> `array` | Internal.

Stores a list of elements and their IDs of each rover.

**unregister**

> `function` | `(id|null) => void`

Remove an element from the list.
