# Topbar

Create a **TREND** topbar component.

## Installation

```bash
## Has peer dependency with react and react-dom
npm install react react-dom
npm install @trend/topbar
```
## Basic Usage

With a module bundler like [webpack](https://webpack.js.org/), use as you would anything else:

```javascript
// Using ES6 modules.
@import React from 'react';
@import Topbar from 'trend-react-components/Topbar';

function Header({ children }) {
  return <Topbar fixed={true}>
    { api =>
      <header {...api.getElementProps()}>
        <div {...api.getInnerProps()}>
          <div {...api.getSectionProps({ position: 'start' })}>
            <button {...api.getIconProps({ type: 'button' })}>
              <MenuIcon />
            </button>
            <h1 {...api.getTitleProps()}>TREND Components</h1>
          </div>
          {children}
        </div>
      </header>
    }
  </Topbar>;
}

// Bare minimum markup that is required.
function AnotherTopbar() {
  return <Topbar>
    { api =>
      <header {...api.getElementProps()}>
        <div {...api.getInnerProps()}>...</div>
      </header>
    }
  </Topbar>;
}
```

Implementing the markup is up to the developer.  The api exposes prop getters
for all the pieces that make up a **TREND Topbar** component.  This is
intentional to allow the developer to choose the markup that fits best for
use case.

## Props:

### children

> `function` | required

Will expose the prop getter api.

### className

> `string` | options, no default

Will merge any class names passed into component directly to the
`getElementProps` getter.  Alternatively, you can just pass any class names directly to the `getElementsProps({ className: '' })` getter.

### compact

> `boolean` | optional, no default

Will add the `compact` modifier to the `className` for the `getElementsProps`
getter.

### fixed

> `boolean` | optional, no default

Will add the `fixed` modifier to the `className` for the `getElementsProps`
getter.

### fixedScroll

> `boolean` | optional, no default

For **topbars** that are hidden on downward scrolls, but visible while user
scrolls up.

### scrollTarget

> `object` | optional, `window`

The DOM node to detect scrolling on.

### tall

> `boolean` | optional, no default

Will add the `tall` modifier to the `className` for the `getElementsProps`
getter.

Property | Category | Type | Description
--- | --- | --- | ---
`getElementProps` | prop getter | `function(props: object)` | Returns object of props to add to the topbar.
`getInnerProps` | prop getter | `function(props: object)` | Returns props object to add to the **inner** child component.
`getSectionProps` | prop getter | `function(props: object)` | Returns props object to add to any **section** child components. Pass in a optional `position: <start\|end>` property to add section modifier.
`getIconProps` | prop getter | `function(props: object)` | Returns props object to add to any **icon** child components.
`getTitleProps` | prop getter | `function(props: object)` | Returns props object to add to the **title** child component.
