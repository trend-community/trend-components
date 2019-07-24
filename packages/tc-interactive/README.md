# Interactive

[React](https://reactjs.org/) that implements the accessibility features of a interactive element when not rendered as its native element.

* [Installation](#installation)
* [Basic Usage](#usage)
* [Props API](#props)

## <a name="installation"></a> Installation

```bash
## Has peer dependency with react and react-dom
npm i @trend/interactive
```

## <a name="usage"></a> Basic Usage

With a module bundler like [webpack](https://webpack.js.org/), use as you would anything else:

```javascript
// Using ES6 modules.
import React from 'react';
import ReactDom from 'react-dom';

import Interactive from '@trend/interactive';

function Demo() {
  const onClick = () => conosle.log('clicked.');

  return (
    <div>
      <Interactive onClick={onClick}>Interactive.</Interactive>
      <Interactive as="span" onClick={onClick}>Interactive.</Interactive>
      <Interactive onClick={onClick}>Interactive.</Interactive>
    </div>
  );
}

ReactDom.render(<Demo />, document.getElementById('root'));
```

## <a name="props"></a> Props API

### as

> `string || Component` | Optional. Defaults to `span`.

Change the underlying element.

### disabled

> `boolean` | Optional.

Indicates whether the element is disabled or not. [MDN](https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XUL/Attribute/disabled)

### focusable

> `boolean` | Optional.

Allow an element to obtain `focus` while being disabled.
