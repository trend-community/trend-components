# Interactive

[React](https://reactjs.org/) that implements the accessibility features of a interactive element when not rendered as its native element.

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

import Interactive from '@trend/interactive';

function Demo() {
  return <Interactive>Interactive.</Interactive>
}

ReactDom.render(<Demo />, document.getElementById('root'));
```

## <a name="props"></a> Props API

### as

> `string || Component` | Optional. Defaults to `span`.

Change the underlying element.
