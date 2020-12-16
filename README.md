# Trend components

**NOTE** No longer actively developed.

This is a mono-repo that houses TREND Community UI component library for building [accessible](https://www.w3.org/TR/wai-aria-practices/) web apps with [React](https://reactjs.org/) and [SASS](https://sass-lang.com/).

## Installation

Installation is done through npm, no yarn installation available at this time.

```bash
npm i trend-components
```

Example of installing individual packages:

```bash
npm i @trend/button
```

## Usage

It is recommended to import individual packages as needed, but to import the entire project:

```javascript
import React from 'react';
import ReactDom from 'react-dom';

import 'trend-components/index.scss';

import { Button, Divider } from 'trend-components';

function App() {
  return (
    <div>
      <h1 className="tc-type-h3">TREND Components</h1>
      <Divider />
      <Button accent variant="ctab">
        Button
      </Button>
    </div>
  );
}

ReactDom.render(<App />, document.getElementById('root'));
```

## Resources

- [React](https://reactjs.org/) is the JavaScript library used for building out the individual components to be used in a user interface.
-[SASS](https://sass-lang.com/) is the CSS extension utilized for styling all components.  Packages that expose a CSS interface will have an accompanying `scss` directory and a `styles.scss` at the root of that packages directory.
- [WAI-ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices/) is the main resource utilized for understanding and creating accessible rich internet applications.
