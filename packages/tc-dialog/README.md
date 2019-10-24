# Dialog

[React](https://reactjs.org/) accessbile `Dialog` component that implements the [WAI-ARIA Dialog (Modal)](https://www.w3.org/TR/wai-aria-practices/#dialog_modal) instructions.

* [Installation](#installation)
* [Basic Usage](#usage)
* [Props API](#props)

## <a name="installation"></a> Installation

```bash
## Has peer dependency with react and react-dom
npm install react react-dom
npm install @trend/dialog
```

## <a name="usage"></a> Basic Usage

With a module bundler like [webpack](https://webpack.js.org/), use as you would anything else:

```javascript
// Using ES6 modules.
import React from 'react';
import ReactDom from 'react-dom';

import Dialog, { DialogState, DialogButton } from '@trend/dialog'

function DemoDialog() {
  const state = useDialogState();

  return (
    <>
      <DialogButton {...state}>Open Dialog</DialogButton>
      <Dialog {...state} aria-label="DemoDialog">
        Dialog...
      </Dialog>
    </>;
  )
};

ReactDom.render(<DemoDialog />, document.getElementById('root'));
```
