# React Buttons

Create **TREND** buttons using react.

## Installation

```bash
## Has peer dependency with react and react-dom
npm install react react-dom
npm install @trend/react-button
```

## Basic Usage

With a module bunlder like [webpack](https://webpack.js.org/), use as you would anything else:

```javascript
// Using ES6 modules.
@import React from 'react';
@import Button from '@trend/button';

// Render a basic TREND component button.
function MyButton(props) {
  return <Button {...props}>My Button</Button>;
}

// Will output:
// <button class="tc-Button" type="button">My Button</button>

// Render a ctab button using variant props.
functon CtabButton() {
  return <Button variant="ctab">Ctab Button</Button>;
}

// Will output:
// <button class="tc-Button tc-Button--ctab" type="button">My Button</button>

// Render a accent compact button using size props.
functon AccentCompactButton() {
  return <Button accent size="flat">Accent Compact Button</Button>;
}

// Will output:
// <button class="tc-Button tc-Button--flat tc-Button--accent" type="button">
//   Accent Compact Button
// </button>

// Render children as a function.
function ButtonWithIcon() {
  return <Button>
    {({ getButtonIconProps }) =>
      <React.Fragment>
        <Icon {...getButtonIconProps()} />
        Button with icon
      </React.Fragment>
    }
  </Button>
}

// Will output:
// <button class="tc-Button" type="button">
//   <svg class="tc-Button-icon" aria-hidden="true" ...>//...</svg>
//   Button with icon
// </button>
```

## Props:

### className

> `string` | optional, no default

Will automatically add `tc-Button` to rendered button element.

### accent

> `boolean` | defaults to `false`

Use the accent theme.

### disabled

> `boolean` | defaults to `false`

### size

> `string` | optional, no default

Can be "compact."

### variant

> `string` | optional, no default

Can be any of "ctab", "flat", or "ghost."

### type

> `string` | defaults `button`

Can be any one of `button`, `submit`, or `reset`.

### children

> `function({}) or node` | required

Children as function gets called with an object and is useful for rendering a child icon in a button element.


Property | Category | Type | Description
--- | --- | --- | ---
`getButtonIconProps` | prop getter | `function(props: object)` | Will return the props to apply to a icon as a child of a button element.
