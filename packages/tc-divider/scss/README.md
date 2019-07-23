# Divider (scss)

Static element that separates and distinguishes sections of content or groups.

This file provides only a breakdown of the **scss/css** pieces.  See the component page for implementing the react **Divider** component.

* [Installation](#installation)
* [Basic Usage](#usage)
* [Modifiers](#modifiers)
* [Class Interface](#classes)
* [SCSS Variables](#variables)
* [Mixin Interface](#mixins)
* [Functions](#functions)

## <a name="installation"></a> Installation

```bash
npm install @trend/divider
```

## <a name="usage"></a> Basic Usage

### HTML

```html
/* Default Divider */

<hr class="tc-Divider" />
<div class="tc-Divider" role="separator" aria-orientation="horizontal"></div>
```
### Styles

```css
// Import all scss
@import "~@trend/divider/styles";

// Import specific files individually.
@import "~@trend/divider/scss/mixins";
@import "~@trend/divider/scss/divider";
@import "~@trend/divider/scss/variables";
```

## <a name="modifiers"></a> Modifiers

All modifier classes adjust the appearance of a `tc-Divider` component.  Using a modifier is as simple as adding the modifier class alongside the component class: `<button class="tc-Divider tc-Divider--<modifier>" />`.

### Indent

Add horizontal whitespace to the left side of a divider.  Will add whitespace to right side of divider for right-to-left displays.

> `tc-Divider--indent`

```html
<hr class="tc-Divider tc-Divider--indent" />
```

## <a name="classes"></a> Class Interface

Class name | Type | Description
--- | --- | ---
`tc-Divider` | Base | Required.
`tc-Divider--indent` | Modifier | Optional.


## <a name="variables"></a> SCSS Variables

Name | Type | Description
--- | --- | ---
`$tc-divider-bg` | `color` | The color that is added as the `border-bottom-width`.
`$tc-divider-indent` | `string` | Pixel value that sets the amount of whitespace to adjust the divider for the `indent` modifier.
`$tc-divider-border-width` | `string` | Pixel value that sets the divider size.

## <a name="mixins"></a> Mixin Interface

Catalogs mixins that are marked for public interfacing.

Name | Arguments | Description
--- | --- | ----
`tc-divider-core` | `$width` | Adds core rules to an existing ruleset and will set the size of the divider per the `$width`.
`tc-divider-indent` | `$indent` `$root[null]` | Adds a rule to an existing ruleset that adjusts whitespace on the left or right of a divider.

## <a name="functions"></a> Functions

There are no functions exposed by this component.
