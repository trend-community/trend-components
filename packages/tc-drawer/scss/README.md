# Drawer SCSS

* [Installation](#installation)
* [Basic Usage](#usage)
* [Modifiers](#modifiers)
* [Child Components](#child)
* [Class Interface](#classes)
* [Variables](#variables)
* [Mixin Interface](#mixins)

## <a name="installation"></a> Installation

```bash
npm install @trend/Drawer
```

## <a name="usage"></a> Basic Usage

### HTML

### Styles

```scss
@import "@trend/button/index.scss";
```

```html
// Default Drawer

<div class="tc-Drawer">
  <div class="tc-Drawer-hd">
    <h1 class="tc-Drawer-title">Title</h1>
    <h2 class="tc-Drawer-subtitle">sub title</h2>
  </div>
  <div class="td-Drawer-inner">
    // Drawer content...
  </div>
</div>

// Drawer overlay

<div class="tc-Drawer tc-Drawer--overlay is-open" aria-hidden="false">
  // Drawer content
</div>
```
## <a name="modifiers"></a> Modifiers

All modifier classes adjust the appearance of a `tc-Drawer` component.  Using a modifier is as simple as adding the modifier class alongside the component class: `<button class="tc-Drawer tc-Drawer--<modifier>" />`.

### Overlay

Overlay style drawers.  When open will overlay the main content of application.

> `tc-Drawer--overlay`

## <a name="child"></a> Child Components

### hd

Add a header to a Drawer, useful for wrapping drawers that have a title and/or subtitle.

> `td-Drawer-hd`

```html
<div class="tc-Drawer">
  <div class="tc-Drawer-hd">...</div>
</div>
```

### title

Add a title to a drawer.

> `tc-Drawer-title`

```html
<div class="tc-Drawer">
  <div class="tc-Drawer-hd">
    <h1 class="tc-Drawer-title">Title</h1>
  </div>
</div>
```

### subtitle

Add a subtitle to a drawer.  Useful if a title exists, not intended for standalone purpose.

> `tc-Drawer-subtitle`

```html
<div class="tc-Drawer">
  <div class="tc-Drawer-hd">
    <h1 class="tc-Drawer-title">Title</h1>
    <h2 class="tc-Drawer-subtitle">subtitle</h2>
  </div>
</div>
```

### inner

Add a inner scrollable section to a drawer.  Useful for navigation.

> `tc-Drawer-inner`

```html
<div class="tc-Drawer">
  <div class="tc-Drawer-inner">...</div>
</div>
```

## <a name="classes"></a> Class Interface

Class name | Description
--- | ---
`tc-Drawer` | Required. Adds default drawer styles.
`tc-Drawer--overlay` | Add overlay style drawer.  Depends on state class `is-open` to toggle visibility.
`tc-Drawer-hd` | Drawer header section.
`tc-Drawer-title` | Drawer title.
`tc-Drawer-subtitle` | Drawer subtitle.
`tc-Drawer-inner` | Self-contained scrollable section.

## <a name="variables"></a> Variables

Name | Description
--- | ---
`$tc-drawer-title-color` | Title color.
`$tc-drawer-title-opacity` | Adjusts opacity for a title.
`$tc-drawer-subtitle-color` | Subtitle color.
`$tc-drawer-subtitle-opacity` | Adjusts opacity for a subtitle.
`$tc-drawer-divider-color` | Default border color.
`$tc-drawer-divider-opacity` | Adjusts opacity for a divider.
`$tc-drawer-surface-color` | Background color of drawer.
`$tc-drawer-surface-padding` | Horizontal padding applied to header child.
`$tc-drawer-width` | Width of drawer.
`$tc-drawer-z-index` | Where drawer resides in the stack.
`$tc-drawer-shadow-level` | Adds a shadow for overlay drawers.

## <a name="mixins"></a> Mixin Interface

Name | Arguments |  Description
--- | --- | ---
`tc-drawer-border-color` | `$color` | Adjust border color.
`tc-drawer-title-color` | `$color` | Adjust the color for a title.
`tc-drawer-subtitle-color` | `$color` | Adjust the color for a subtitle.
