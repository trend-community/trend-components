# Topbar

UI region that can contain application title, icons, and sections.

## Installation

```bash
npm install @trend/topbar
```

## Basic Usage

### HTML

```markup
<div class="tc-Topbar">
  <div class="tc-Topbar-inner">
    <div class="tc-Topbar-section tc-Tobar-section--start">
      <button class="tc-Topbar-icon" type="button">
        // Navigaton icon
      </button>
      <span class="tc-Topbar-title">Application title</span>
    </div>
    <div class="tc-Topbar-section tc-Tobar-section--end">
      Second section
    </div>
  </div>
</div>
```

### Styles

```scss
// Import all variables, mixins, and css.
@import "@trend/topbar/index";

// Import variables
@import "@trend/topbar/variables";

// Import mixins
@import "@trend/topbar/mixins/index";
```

## Modifiers

All modifier classes adjust the appearance of a `tc-Topbar` component.  Using a modifier is as simple as adding the modifier class alongside the component class: `<div class="tc-Topbar tc-Topbar--<modifier>" />`.

### Compact Topbar

Reduce the default height and horizontal padding of a `tc-Topbar` component.

```markup
<div class="tc-Topbar tc-Topbar--compact">...</div>
```

### Tall Topbar

Reset the default height of `tc-Topbar` to be taller.  Using this modifier also realigns a `tc-Topbar-title` to the bottom of the component.

```markup
<div class="tc-Topbar tc-Topbar--tall">...</div>
```

### Fixed Topbar

Keep the position of `tc-Topbar` fixed.

```markup
<div class="tc-Topbar tc-Topbar--fixed">...</div>
```

## Child component

### Inner

Wrap the contents of the "topbar" with this child component.  All `tc-Topbar` should have this child as a direct descendant.

```markup
<div class="tc-Topbar">
  <div class="tc-Topbar-inner">...<div>
</div>
```

### Section

Break up the inner content into sectons.  This component child is accompanied with two modifiers: `--start` for the first section and `--end` to indicate the last section.

```markup
<div class="tc-Topbar">
  <div class="tc-Topbar-inner">
    <div class="tc-Topbar-secton tc-Topbar-section--start">...</div>
    <div class="tc-Topbar-secton tc-Topbar-section--end">...</div>
  <div>
</div>
```

### Icon

Wrap icons with a "topbar" child component.

```markup
<div class="tc-Topbar-icon">// icon</div>
```

## Styling

### CSS Class Interface

Class name | Type | Description
--- | ---
`tc-Topbar` | Base | Required. Base component.
`tc-Topbar-inner` | Child | Required. Inner wrapper for a "topbar."
`tc-Topbar-section` | Child | Optional. Break up inner content into sections.
`tc-Topbar-section--start` | Child modifier | Optional. Starting section.
`tc-Topbar-section--end` | Child | Optional. Ending section.
`tc-Topbar-icon` | Child | Optional. For action items in "topbar."
`tc-Topbar--compact` | Modifier | Optional. Constrain height and horizontal padding.
`tc-Topbar--tall` | Modifier | Optional.  Increase default height of a "topbar."
`tc-Topbar--fixed` | Modifier | Optional. Fix position of a "topbar."

### Mixin Interface

Name | Arguments |  Description
--- | --- | ---
`tc-topbar-bg-color-readability` | `$color` | Adjust the theme.
`tc-topbar-icon-color` | `$color` | Adjust the icon theme.
