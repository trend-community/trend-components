# Disclosure

[React](https://reactjs.org/) that implements the [WAI-ARIA Disclosure Pattern](https://www.w3.org/TR/wai-aria-practices/#disclosure).

- [Installation](#installation)
- [Basic Usage](#usage)
- [Props API](#props)

## <a name="installation"></a> Installation

```bash
## Has peer dependency with react and react-dom
npm i @trend/disclosure
```

## <a name="usage"></a> Basic Usage

With a module bundler like [webpack](https://webpack.js.org/), use as you would anything else:

```javascript
// Using ES6 modules.
import React from 'react';
import ReactDom from 'react-dom';

import Disclosure, {
  DisclosureButton,
  useDisclosureState
} from '@trend/disclosure';

function Demo() {
  const disclosure = useDisclosureState();

  return (
    <>
      <DisclosureButton {...disclosure}>Disclosure Button</DisclosureButton>
      <Disclosure {...disclosure}>Disclosure content</Disclosure>
    </>
  );
}

ReactDom.render(<Demo />, document.getElementById('root'));
```

## <a name="props"></a> Props API

### Disclosure

**as**

> `string || Component` | Optional. Defaults to `div`.

Change the underlying element.

**classnameOptions**

> `object` | See below for default.

```javascript
classnameOptions = {
  ROOT: 'tc-Disclosure',
  HIDDEN: 'is-hidden'
};
```

Adds default class name to component regardless of state and hidden (i.e. not visible) state class.

**visible**

> `boolean` | Optional. Defaults to `false`.

Indicates whether or not component is visible in the UI.

### DisclosureButton

Inherits from `Button` component. See props API section of the Button package for additional props.

**visible**

> `boolean` | Optional. Defaults to `false`.

Adjusts the `aria-expanded` accordingly.

**toggle**

> `function` | Defaults to `() => void`.

It is intended for developer to spread in `useDisclosureState` props.

### useDisclosureState

**disclosureId**

> `string` | Defaults to 'tc-disclosure-##'.

A unique id to link the button and disclosure element for accessibility.

**hide**

> `function`

Will set `visible` to `false`.

**show**

> `function`

Will set `visible` to `true`.

**toggle**

> `function`

Will toggle `visible` state.

**visible**

> `boolean` | Optional. Defaults to `false`.

Indicates whether or not component is visible in the UI.
