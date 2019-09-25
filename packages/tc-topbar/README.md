# Topbar

Create a **TREND** topbar component.

- [Installation](#installation)
- [Basic Usage](#usage)
- [Props API](#props)

## <a name="installation"></a> Installation

```bash
## Has peer dependency with react and react-dom
npm i react react-dom
npm i @trend/topbar
```
## <a name="usage"></a> Basic Usage

With a module bundler like [webpack](https://webpack.js.org/), use as you would anything else:

```javascript
// Using ES6 modules.
import React from 'react';
import ReactDom from 'react-dom';

import Topbar, {
  TopbarInner,
  TopbarSection,
  TopbarTitle,
  TopbarIcon
} from '@trend/topbar';

function Header() {
  return <Topbar fixed>
    <TopbarInner>
      <TopbarSection variant="start">
        <TopbarIcon type="button"><MenuIcon /></TopbarIcon></TopbarIcon>
        <TopbarTitle>TREND Components</TopbarTitle>
      </TopbarSection>
    </TopbarInner>
  </Topbar>;
}

ReactDom.render(<Header />, docment.getElementById('root'));
```

## <a name="props"></a> Props API

### Topbar

**as**

> `string || Component` | Optional. Defaults to `div`.

Change the underlying element.

**classnameOptions**

> `object` | See below for default.

```javascript
classnameOptions = {
  ROOT: 'tc-Topbar',
  INNER: 'tc-Topbar-inner',
  SECTION: 'tc-Topbar-section',
  SECTION_START: 'tc-Topbar-section--start',
  SECTION_END: 'tc-Topbar-section--end',
  TITLE: 'tc-Topbar-title',
  ICON: 'tc-Topbar-icon',
  COMPACT: 'tc-Topbar--compact',
  FIXED: 'tc-Topbar--fixed',
  FIXED_SCROLLING: 'tc-Topbar--fixedScrolling',
  TALL: 'tc-Topbar--tall'
};
```

Adds default class name to component regardless of state and hidden (i.e. not visible) state class.

**compact**

> `boolean` | optional, no default

Will add the `compact` modifier.

**fixed**

> `boolean` | optional, no default

Will add the `fixed` modifier.

**fixedScroll**

> `boolean` | optional, no default

For **topbars** that are hidden on downward scrolls, but visible while user
scrolls up.

**tall**

> `boolean` | optional, no default

Will add the `tall` modifier.

### TopbarSection

**variant**

> `string` | Optional.  Can be one of "start" or "end".

Add a modifier class to the section.
