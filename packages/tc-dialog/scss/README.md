# Dialog (Modal)

A **dialog** is an element overlaid on either the primary window or another dialog element.  Dialogs can alert users, provide confirmations, or be tasked based.

This file provides only a breakdown of the **scss/css** pieces.  See the component page for implementing the react **Dialog** component.

* [Installation](#installation)
* [Basic Usage](#usage)
* [Modifiers](#modifiers)
* [Child Components](#child)
* [Class Interface](#classes)
* [SCSS Variables](#variables)
* [Mixin Interface](#mixins)
* [Functions](#functions)

## <a name="installation"></a> Installation

```bash
npm install @trend/dialog
```

### HTML

```html
/* Default TextField with an icon aligned to the left of the input. */

<div class="tc-Dialog"
  role="dialog"
  aria-modal="true"
  aria-labelledby="tc-dialog-component"
  aria-describedby="tc-dialog-body">
  <div class="tc-Dialog-box">
    <h2 class="tc-Dialog-title" id="tc-dialog-component">Dialog Title</h2>
    <div class="tc-Dialog-body" id="tc-dialog-body">
    </div>
    <footer class="tc-Dialog-actions">
      <button class="tc-Button tc-Dialog-button" type="button">Cancel</button>
      <button class="tc-Button tc-Dialog-button" type="button">Confirm</button>
    </footer>
  </div>
</div>
<div class="tc-DialogMask" />
```

### Styles

```css
// Import all scss
@import "~@trend/dialog/styles";

// Import individual assets.
@import "~@trend/dialog/scss/functions";
@import "~@trend/dialog/scss/variables";
@import "~@trend/dialog/scss/mixins";
@import "~@trend/dialog/scss/dialog";
```

## <a name="modifiers"></a> Modifiers

All modifier classes adjust the appearance/layout of a `tc-Dialog` component.  Using a modifier is as simple as adding the modifier class alongside the component class: `<button class="tc-Dialog tc-Dialog--<modifier>" />`.

## <a name="child"></a> Child Components

All child (sub) components are required to be a descendant of the parent `tc-Dialog` component.  They have the following classname pattern: `tc-Dialog-<child name>`.

## <a name="classes"></a> Class Interface

Class name | Type | Description
--- | --- | ---
`tc-Dialog` | Base | Required. The root Dom element that contains the box.
`tc-Dialog-box | Child | Required. The bounding box for the dialog content.
`tc-Dialog-title | Child | Optional.  A header for the dialog.
`td-Dialog-body | Child | Optional.  The main content area of the dialog.
`tc-Dialog-actions | Child | Optional. The footer area that contains the dialogs action buttons.
`td-Dialog-actions-button | Child | Optional. Is a direct descendant of the `tc-Dialog-actions` child.  A common pattern is to extend them with a `tc-Button` component.
`tc-Dialog--scroll` | Modifier | Optional.  For dialogs that possess overflowing content that requires scrolling.
`tc-Dialog--stacked` | Modifier | Optional.  Used when dialogs have button labels that break to a second line.
`td-DialogMask | Base (sibling) | Optional.  This is a sibling component to `td-Dialog`.

## <a name="variables"></a> SCSS Variables

Name | Type | Description
--- | --- | ---
`$tc-dialog-mask-color` | `String` | A string value that maps to the `tc-theme-fetch-option` function.
`$tc-dialog-title-color` | `String` | A string value that maps to the `tc-theme-fetch-option` function.
`$tc-dialog-content-color` | `String` | A string value that maps to the `tc-theme-fetch-option` function.
`$tc-dialog-scroll-divider-color` | `String` | A string value that maps to the `tc-theme-fetch-option` function.
`$tc-dialog-mask-opacity` | `Number` | Opacity value for the mask.
`$tc-dialog-title-color-opacity` | `Number` | Alpha transparency value.
`$tc-dialog-content-color-opacity` | `Number` | Alpha transparency value.
`$tc-dialog-scroll-divider-opacity` | `Number` | Alpha transparency value.
`$tc-dialog-min-width` | `String` | The minimum width for the dialog in pixels.
`$tc-dialog-max-width` | `String` | The maximum width for the dialog in pixels.
`$tc-dialog-z-index` | `Number` | The z-order for the dialog.

## <a name="mixins"></a> Mixin Interface

Catalogs mixins that are marked for public interfacing.

Name | Arguments | Description
--- | --- | ----
`tc-dialog-container-bg-color` | $color | Sets the background color of the dialog box.
`tc-dialog-mask-color` | $color, $alpha | Set the background color and alpha transparency for the dialog mask.
`tc-dialog-title-color` | $color, $alpha | Set the text color and alpha transparency for the dialog title.
`tc-dialog-content-color` | $color, $alpha | Set the text color and alpha transparency for the body of the dialog.
`tc-dialog-scroll-divider-color` | $color, $alpha | Sets the border color applied to top and bottom areas of the scrollable body.
`tc-dialog-min-width` | $min-width | Applies a minimum width the dialog.
`tc-dialog-max-width` | $max-width, $margin | Sets the maximum width to be applied to the dialog.
`tc-dialog-max-height` | $max-height, $margin | Sets the maximum height to be applied to the dialog.
