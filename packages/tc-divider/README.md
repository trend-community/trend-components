# Divider

[React](https://reactjs.org/) component that allows users to separate and distinguish sections of content or groups statically.

* [Installation](#installation)
* [Basic Usage](#usage)
* [Props API](#props)

## <a name="installation"></a> Installation

```bash
## Has peer dependency with react and react-dom
npm install react react-dom
npm install @trend/divider
```

## <a name="usage"></a> Basic Usage

With a module bundler like [webpack](https://webpack.js.org/), use as you would anything else:

```javascript
// Using ES6 modules.
import React from 'react';
import ReactDom from 'react-dom';
import Divider from '@trend/divider';

ReactDom.render(<Divider />, document.getElementById('root'));
```

## <a name="props"></a> Props API

### as

> `string || Component` | Optional. Defaults to `hr`.

Change the underlying element.

### orientation

> `string` | Optional.  Defaults to `vertical`.  Can be either `vertical` or `horizontal`.

Will adjust the `aria-orientation` attribute on the element.  By default prop is set to `vertical` which sets the `aria-orientation` equal to `horizontal` and vice-versa for setting the `orientation` equal to `horizontal`, `aria-orientation` will equal `vertical`.

### variant

> `string` | Optional. Currently only one variant exists, `indent`.

**Indent** will add whitespace to left-side of a divider.
