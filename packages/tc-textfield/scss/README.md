# TextField (scss)

Input, edit, and select text.

This file provides only a breakdown of the **scss/css** pieces.  See the component page for implementing the react **TextField** component.

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
npm install @trend/textfield
```

## <a name="usage"></a> Basic Usage

### HTML

```html
/* Default TextField with an icon aligned to the left of the input. */

<div>
  <div class="tc-TextField tc-TextField--beginningIcon">
    <input class="tc-TextField-input" id="input1" type="text" />
    <label for="input1">TextField label</label>
    <svg class="tc-TextField-icon" width="1.25em" height="1.25em">...</svg>
  </div>

  <div class="tc-TextField-helper">Helper text</div>

</div>
```

### Styles

```css
// Import all scss
@import "~@trend/textfield/styles";

// Import specific files individually.
@import "~@trend/textfield/scss/functions";

@import "~@trend/textfield/scss/mixins";

@import "~@trend/textfield/scss/textField";

@import "~@trend/textfield/scss/variables";
```

## <a name="modifiers"></a> Modifiers

All modifier classes adjust the appearance of a `tc-TextField` component.  Using a modifier is as simple as adding the modifier class alongside the component class: `<button class="tc-TextField tc-TextField--<modifier>" />`.

## <a name="classes"></a> Class Interface

### Icons

Add a beginning icon to the textfield, which is (visually) aligned to the left of the `input` element.

> `tc-TextField--beginningIcon`

Add a ending icon to the textfield, which is (visually) aligned to the right of the `input`.

> `tc-TextField--endingIocn`

**NOTE**: Textarea elements do not accommodate icons.

```html
/* Beginning Icon */
<div class="tc-TextField tc-TextField--beginningIcon">
  <input class="tc-TextField-input" />
  <svg class="Tc-TextField-icon" />
</div>

/* Ending Icon */
<div class="tc-TextField tc-TextField--endingIcon">
  <input class="tc-TextField-input" />
  <svg class="Tc-TextField-icon" />
</div>


/* Beginning and ending icons */
<div class="tc-TextField tc-TextField--beginningIcon tc-TextField--endingIcon">
  <input class="tc-TextField-input" />
  <svg class="Tc-TextField-icon" />
  <svg class="Tc-TextField-icon" />
</div>
```

### Rim

Adds a border surrounding the entire textfield.

> `tc-TextField--rim`

```html
<div class="tc-TextField tc-TextField--rim">...</div>
```

**NOTE**: Should not be used alongside `textarea` modifier.

### Textarea

Accommodate textfields with a child `textarea` element.

**NOTE**: The child control needs to be a `textarea` element and not an `input` element and should not be used alongside `rim` modifier.

> `tc-TextField--textarea`

```html
<div class="tc-TextField tc-TextField--textarea">
  <textarea></textarea>
</div>
```

### Stretch

Stretch a textarea to occupy full-width of the parent element.

> `tc-TextField--stretch`

```html
<div class="tc-TextField tc-TextField--stretch">...</div>
```
## <a name="child"></a> Child Components

Adding the actual control element: `input|textarea`.

> `tc-TextField-input`

```html
/* Using and input element. */

<div class="tc-TextField">
  <input class="tc-TextField-input" />
</div>
```

```html
/* Using and textarea element. */

<div class="tc-TextField">
  <textarea class="tc-TextField-input"></textarea>
</div>
```

### Labels

Adding a label to a textfield.

> `tc-TextField-label`

```html
<div class="tc-TextField">
  ...
  <label class="tc-TextField-label">Label</label>
</div>
```

### Icons

Add icons to a textfield.  Will handle up to two icons and when control element is an `input` element.  Note the widht and height attributes on svg elements.

> `tc-TextField-icon`

```html
<div class="tc-TextField">
  <input ... />
  <svg class="tc-TextField-icon" width="1.25em" height="1.25em">...</svg>
  <svg class="tc-TextField-icon" width="1.25em" height="1.25em">...</svg>
</div>
```

### Helper

Sibling child element.  Meaning it is the only child that is not a direct descendant of the actual textfield, but is required to be a direct sibling, sitting just after the textfield in the render tree.

> `tc-TextField-helper`

```html
<div>
  <div class="tc-TextField">...</div>
  <div class="tc-TextField-helper">...</div>
<div>
```

## <a name="classes"></a> Class Interface

Class name | Type | Description
--- | --- | ---
`tc-TextField` | Base | Required.  Base component and wraps the input, label, and/or icons.  Helper text sits just outside component, it is a direct sibling.
`tc-TextField-input` | Child | Required. Added to either the `input|textarea` element.
`tc-TextField-label` | Child | Required.  Added to the `label` element.
`tc-TextField-icons` | Child | Required.  Added to the element that renders the icon.  Component will handle a maximum of two icons.
`tc-TextField-helper` | Sibling (Child) | Required.  Not a direct child, but is required to be a direct sibling of the main component.
`tc-TextField-beginningIcon` | Modifier | Optional.  Only required when a single icon exists and is required to be aligned to left of input.
`tc-TextField-endingIcon` | Modifier | Optional.  Only required when a single icon exists and is required to be aligned to right of input.
`tc-TextField-rim` | Modifier | Optional.  Will a surrounding border to the input.
`tc-TextField-textarea` | Modifier | Optional.  Required when child control is a `textarea`.
`tc-TextField-stretch` | Modifier | Optional.  When component needs to stretch full width of parent.
`is-active` | State | Add to main component when rendered with existing value or blurred with a value.
`is-disabled` | State | Add to main component when component needs to be disabled but present in DOM.
`is-focused` | State | Add to main component when `input|textarea` obtain focus.
`is-invalid` | State | Add to main component when `input|textarea` fail validation.

## <a name="variables"></a> SCSS Variables

Name | Type | Description
--- | --- | ---
`$tc-textfield-classnames` | `map` | A map of default class names.
`$tc-textfield-classnames.root` | `String` | Root classname.
`$tc-textfield-classnames.modifier-beginning-icon` | `String` | Modifier class for beginning icon.
`$tc-textfield-classnames.modifier-ending-icon` | `String` | Modifier class for ending icon.
`$tc-textfield-classnames.modifier-rim` | `String` | Modifier class for rim variant.
`$tc-textfield-classnames.modifier-stretch` | `String` | Modifier class for stretch variant.
`$tc-textfield-classnames.modifier-textarea` | `String` | Modifier class for textarea variant.
`$tc-textfield-classnames.child-helper` | `String` | Child class for helper child.
`$tc-textfield-classnames.child-icon` | `String` | Child class for icons.
`$tc-textfield-classnames.child-input` | `String` | Child class for child input.
`$tc-textfield-classnames.child-label` | `String` | Child class for child label.
`$tc-textfield-classnames.state-active` | `String` | Active state class.
`$tc-textfield-classnames.state-disabled` | `String` | Disabled state class.
`$tc-textfield-classnames.state-focused` | `String` | Focused state class.
`$tc-textfield-classnames.state-invalid` | `String` | Invalid state class.
`$tc-textfield-error` | `string` | Valid string value for `tc-theme-prop` function.
`$tc-textfield-stretch-border-color` | `Color` | Adjusts the border color stretch modifier.
`$tc-textfield-disabled-border` | `Color` | Adjusts the border color for disabled textfields.
`$tc-textfield-disabled-icon` | `Color` | Adjusts the icon color for disabled textfields.
`$tc-textfield-bottom-color-hover` | `Color` | Adjusts the bottom border color of an input for a textfield on hover.
`$tc-textfield-border-color` | `Color` | Adjusts the border color for the textfield.
`$tc-textfield-label` | `Color` | Adjusts the label color.
`$tc-textfield-color` | `Color` | Adjusts the color of the input in a textfield.
`$tc-textfield-helper-text-color` | `Color` | Adjusts the color for helper text.
`$tc-textfield-icon-color` | `Color` | Adjusts the color of icons in a textfield.
`$tc-textfield-focused-label-color` | `Color` | Adjusts the color of the label when textfield acquires focus.
`$tc-textfield-disabled-label-color` | `Color` | Adjusts the label while the textfield is in a disabled state.
`$tc-textfield-disabled-color` | `Color` | Adjust the color of inputted text while the textfield is in a disabled state.
`$tc-textfield-disabled-helper-text-color` | `Color` | Adjusts the color of helper text while the textfield is in a disabled state.
`$tc-textfield-background` | `Color` | Adjusts the background color for a textfield.
`$tc-textfield-disabled-background` | `Color` | Adjusts the background color for a textfield while in a disabled state.
`$tc-textfield-rim-disabled-border` | `Color` | Adjusts the color of textfield with the rim modifier.
`$tc-textfield-border-radius` | `String` | Adjust corners of textfield.
`$tc-textfield-height` | `String` | Adjusts the overall height of textfield, edit with caution, will lead to inconsistent offsets of other children if not taken into account.
`$tc-textfield-label-offset`| `String` | Adjsut the horizontal offset of a label.
`$tc-textfield-label-position-y` | `String` | Adjust the vertical positioning of a label while textfield toggles from focus to blur states.
`$tc-textfield-rim-label-position-y` | `String` | Adjust the vertical positioning of a label while textfield toggles from focus to blur states when rim modifier is used.
`$tc-textfield-icon-offset` | `String` | Adjust horizontal positioning of icons.
`$tc-textfield-ending-icon-offset` | `String` | Adjust the horizontal offset of an icon that is positioned to the right of an input.
`$tc-textfield-icon-padding` | `String` | Adjust padding to the icon(s).
`$tc-textfield-border-width` | `String` | Adjust width of border.  Edit with caution, will have affect on overall height.
`$tc-textfield-input-top` | `String` | Adjusts top padding of the input.
`$tc-textfield-input-bottom` | `String` | Adjusts bottom padding of the input.

## <a name="mixins"></a> Mixin Interface

Catalogs mixins that are marked for public interfacing.

Name | Arguments | Description
--- | --- | ----
`tc-textfield-transition` | `$property` | Valid css property that can be transtioned.
`tc-textfield-color` | `$color`<sup>*</sup> | Adjust the color.
`tc-textfield-helper-text-color` | `$color`<sup>*</sup> | Adjust the text color for helper text.
`tc-textfield-background` | `$color`<sup>*</sup> | Adjust the background color.
`tc-textfield-label-color | `$color`<sup>*</sup> | Adjust text color for labels.
`tc-textfield-stretch-border-color` | `$color`<sup>*</sup> | Adjust border for stretched textfields.
`tc-textfield-border-color` | `$color`<sup>*</sup> | Adjsut the border color of the child input.
`tc-textfield-hover-border-color` | `$color`<sup>*</sup> | Adjust the border color of the child input on hover.
`tc-textfield-caret-color` | `$color`<sup>*</sup> | Adjust the caret color for labels for required textfields.
`tc-textfield-label-background-color` | `$color`<sup>*</sup> | Apply background color to a label.
`tc-textfield-label-active` | `$positionY, $positionX[0%], $size[0.75]` | Apply stylings for labels when textfield is active.
`tc-textfield-label-max-width` | `$max-width` | Apply a maximum width rule to the label.
`tc-textfield-icon-color` | `$color, $styleSecondIcon[false]`<sup>*</sup> | tc-textfield-icon-color

<sup>*</sup> Argument value requires a valid `$style` for the `tc-theme-prop` mixin.


## <a name="functions"></a> Functions

Name | Argument | Description
--- | --- | ---
`tc-textfield-classname` | `$name` | Requires `$tc-textfield-classnames` map and name is a valid prop that returns a class name string.

