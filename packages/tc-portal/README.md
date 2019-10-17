# Portal

[React](https://reactjs.org/) component that wraps a [React Portal](https://reactjs.org/docs/portals.html#___gatsby) component.

* [Installation](#installation)
* [Basic Usage](#usage)
* [Props API](#props)

## <a name="installation"></a> Installation

```bash
## Has peer dependency with react and react-dom
npm install react react-dom
npm install @trend/portal
```

## <a name="usage"></a> Basic Usage

With a module bundler like [webpack](https://webpack.js.org/), use as you would anything else:

```javascript
// Using ES6 modules.
import React from 'react';
import ReactDom from 'react-dom';

import Button from '@trend/portal';

function SinglePortal() {
  return <Portal className="tc-phl tc-mal tc-border">
    <h1 className="tc-type-h3">Portal</h1>
    <p>Portal content...</p>
  </Portal>
};

ReactDom.render(<SinglePortal />, document.getElementById('root'));
```

## <a name="props"></a> Props API

**className**

> `string` | Optional.  Defaults to `tc-Portal`.

Will append to the default className.  Currently no way to remove the default className.
