# Visually Hidden

[React](https://reactjs.org/) to hide an element visually, but keep the element text available to be announced by a screen reader.

* [Installation](#installation)
* [Basic Usage](#usage)
* [Props API](#props)

## <a name="installation"></a> Installation

```bash
## Has peer dependency with react and react-dom
npm install react react-dom
npm install @trend/visually-hidden
```

## <a name="usage"></a> Basic Usage

With a module bundler like [webpack](https://webpack.js.org/), use as you would anything else:

```javascript
// Using ES6 modules.
import React from 'react';
import ReactDom from 'react-dom';

import Button from '@trend/button';
import VisuallyHidden from '@trend/visually-hidden';

function Demo() {
  return <Button variant="ctab">
    <VisuallyHidden>Text for screen reader.</VisuallyHidden>
  </Button>;
}

ReactDom.render(<Demo />, document.getElementById('root'));
```

## <a name="props"></a> Props API

### as

> `string || Component` | Optional. Defaults to `span`.

Change the underlying element.
