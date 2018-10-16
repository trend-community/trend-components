# Buttons

A button indicates an action upon touch and is typically labeled using text, an icon, or both.

## Installation

```bash
npm install @trend/button
```

## Basic Usage

### HTML

### Styles

```scss
@import "@trend/button/index.scss";
```

```markup
<button class="tc-button" type="button">
  Button
</button>
```

## Modifiers

All modifier classes adjust the appearance of a `tc-Button` component.  Using a modifier is as simple as adding the modifier class alongside the component class: `<button class="tc-Button tc-Button--<modifier>" />`.

### Accent Button

To style a button that utilizes a theme's accent color add the `tc-Button--accent` to the `<button />` element.

### Call to Action Button (i.e. ctab)

To style a call to action button add `tc-Button--ctab` to the button element.

**NOTE** Add **accent** modifier for a **ctab** button using the theme accent.

### Flat Button

Add `tc-Button--flat` to the button element to have a flat style button.

**NOTE** Add **accent** modifier for a **flat** button using the theme accent.

### Ghost Button

Add `tc-Button--ghost` to the button element to have outlines/ghost style button.

**NOTE** Add **accent** modifier for a **ghost** button using the theme accent.

### Compact Button

Add `tc-Button--compact` to the button element for a reduced size button.

**NOTE** Add **accent** modifier for a **compact** button using the theme accent.

## Child component

### Icons

To add an icon, add the `tc-Button-icon` class to an element that is a child of the button element with a `aria-hidden="true"` attribute.

```markup
<button class="tc-Button" type="button">
  <svg class="tc-Button-icon" aria-hidden="true" />
  Button
</button>
```

## Disabled Button

Add a `disabled` attribute directly to a button element.

```markup
<button class="tc-Button" disabled type="button">
  Button
</button>
```

## Styling

### CSS Class Interface

Class name | Description
--- | ---
`tc-Button` | Required.  Basic text button.
`tc-Button--accent` | Optional. Skin a button using the theme accent.
`tc-Button--ctab` | Optional. Call to action button.
`tc-Button--flat` | Optional. Flat style button.
`tc-Button--ghost` | Optional.  Outline styled button.
`tc-Button--compact` | Optional.  Reduced size button.

### Mixin Interface

Name | Arguments |  Description
--- | --- | ---
`tc-button-bg-readable` | `$bg-color` | Adjust the background color of a button and address text color for readability.
`tc-button-color` | `$color: primary` | Adjust the text color of a button.
`tc-button-bg-color` | `$color` | Add a background color to a button.
`tc-button-padding` | `$horizontal` `$vertical: 0` | Add padding to a button element and enforce shorthand syntax.
`tc-button-radius` | `$radius` | Adjust the border radius of a button.
`tc-button-ghost-width` | `$border-width` | Adjust the width of ghost button.
`tc-button-ghost-color` | `$color` | Adjust the border color for a ghost button.
`tc-button-ghost` | none | Set up a ghost style button.
`tc-button-compact` | none | Reduce size of a standard `tc-Button`.
