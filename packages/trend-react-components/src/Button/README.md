# React Buttons

Create **TREND** buttons using react.

## Installation

```bash
npm install @trend/react-button
```

## Basic Usage

With a module bunlder like [webpack](https://webpack.js.org/), use as you would anything else:

```javascript
// Using ES6 modules.
@import React from 'react';
@import Button from 'trend-react-components/Button';

// Render a basic TREND component button.
function MyButton(props) {
  return <Button {...props}>My Button</Button>;
}

// Will output:
// <button class="tc-Button" type="button">My Button</button>

// Render a ctab button using modifiers as a string.
functon CtabButton() {
  return <Button modifiers='ctab'>Ctab Button</Button>;
}

// Will output:
// <button class="tc-Button tc-Button--ctab" type="button">My Button</button>

// Render a flat accent button using modifiers as a array.
functon CtabButton() {
  return <Button modifiers={['flat', 'accent']}>Ctab Button</Button>;
}

// Will output:
// <button class="tc-Button tc-Button--flat tc-Button--accent" type="button">
//   My Button
// </button>

// Render children as a function.
function ButtonWithIcon() {
  return <Button>
    {({ getButtonIconProps }) =>
      <React.Fragment>
        <svg {...getButtonIconProps()}>//...<svg>
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

### disabled

> `boolean` | defaults to `false`

### modifiers

> `string` or `array` | optional

Can be any of "accent", "ctab", "flat", "ghost", and/or "compact."  Will prepend `tc-Button--` to each name passed in.

### type

> `string` | defaults `button`

Can be any one of `button`, `submit`, or `reset`.

### children

> `function({}) or node` | required

Children as function gets called with an object and is useful for rendering a child icon in a button element.


Property | Category | Type | Description
--- | --- | --- | ---
`getButtonIconProps` | prop getter | `function(props: object)` | Will return the props to apply to a icon as a child of a button element.
