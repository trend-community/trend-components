# List (scss)

List displays a series of text content and/or images.

This file provides only a breakdown of the **scss/css** pieces.

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
npm install @trend/list
```

## <a name="usage"></a> Basic Usage

### HTML

```html
/* Default List implementation. */

<ul class="tc-List">
  <li class="tc-List-item>
    <span class="tc-List-item-text">...</span>
  </li>
  <li class="tc-List-item>
    <span class="tc-List-item-text">...</span>
  </li>
</ul>
```

### Styles

```css
// Import all css
@import "~@trend/list/styles";

// Import individual assets.
@import "~@trend/list/scss/functions";
@import "~@trend/list/scss/variables";
@import "~@trend/list/scss/mixins";
@import "~@trend/list/scss/list";
```

## <a name="modifiers"></a> Modifiers

All modifier classes adjust the appearance of a `tc-List` component.  Using a modifier is as simple as adding the modifier class alongside the component class: `<button class="tc-List tc-List--<modifier>" />`.

## <a name="classes"></a> Class Interface

Alter the appearance of media child items when displaying avatars.

> `tc-ist--avatar`

```html
<ul class="tc-List tc-List--avatar">
  <li class="tc-List-item">
    <span class="tc-List-item-media"><svg .../></span>
    <span class="tc-list-item-text">...</span>
  </li>
</ul>
```

### Condense

Limit the amount of vertical whitespace for list items.

> `tc-List--condense`

```html
<ul class="tc-List tc-List--condense">...</ul>
```

### Extend

Add the extend modifier when add more than one line of text to a list time.

> `tc-List--extend`

```html
<ul class="tc-List tc-List--extend">
  <li class="tc-List-item">
    <span class="tc-List-item-text">...</span>
    <span class="tc-list-item-text">...</span>
  </li>
</ul>
```

### Static

For lists that do not need any state (focus, active...).

> `tc-List--static`

```html
<ul class="tc-List tc-List--static">...</ul>
```

### Items

The actual list items inside a list.  Should always be a direct descendent of 
the list.

> `tc-List-item`

```html
<ul class="tc-List">
  <li class="tc-List-item">...</li>
  <li class="tc-List-item">...</li>
</ul>
```

### Media

A child element of a list item and useful for rendering an icon to the left
of the list item text.

> `tc-List-item-media`

```html
<ul class="tc-List">
  <li class="tc-List-item">
    <span class="tc-List-item-media"><svg /></span>
  </li>
</ul>
```
### Text

A child element of a list item for displaying text.

> `tc-List-item-text`

```html
<ul class="tc-List">
  <li class="tc-List-item">
    <span class="tc-List-item-text">...</span>
  </li>
</ul>
```

### Meta

A child element of a list item for displaying an icon to the right of the text.

> `tc-List-item-meta`

```html
<ul class="tc-List">
  <li class="tc-List-item">
    <span class="tc-List-item-text">...</span>
    <span class="tc-List-item-meta"><svg /></span>
  </li>
</ul>
```

### Primary text

A child element of a item text child for providing emphasis to the text.

> `tc-List-item-text-primary`

```html
<ul class="tc-List">
  <li class="tc-List-item">
    <span class="tc-List-item-text">
      <span class="tc-List-item-text-primary">...</span>
    </span>
  </li>
</ul>
```

### Ancillary text

A child element of a item text child for providing less emphasis to the text.
Typically would be accompanied with primary text.

> `tc-List-item-text-ancillary`

```html
<ul class="tc-List">
  <li class="tc-List-item">
    <span class="tc-List-item-text">
      <span class="tc-List-item-text-primary">...</span>
      <span class="tc-List-item-text-ancillary">...</span>
    </span>
  </li>
</ul>
```

### Disabled

Render and item as disabled.

> `is-disabled`

```html
<ul class="tc-List">
  <li class="tc-List-item is-disabled">...</li>
</ul>
```

### Active

Activate a list item.  For instance, when a user clicks a list item.

> `is-active`

```html
<ul class="tc-List">
  <li class="tc-List-item is-active">...</li>
</ul>
```

### Updating

It is helpful to add this state class to all other items in the list when 
setting an item to active to avoid unwanted stylistic effects.  Use a
transitionend event on these items to remove state class.

> `is-updating`

```html
<ul class="tc-List">
  <li class="tc-List-item is-updating">...</li>
</ul>
```

## <a name="classes"></a> Class Interface

Class name | Type | Description
--- | --- | ---
`tc-List` | Base | Required.
`tc-List-item` | Child | Required.
`tc-List-item-text` | Child | Required.
`tc-List-item-media` | Child | Optional.
`tc-List-item-meta` | Child | Optional.
`tc-List-item-text-primary` | Child | Optional.
`tc-List-item-text-ancillary` | Child | Optional.
`tc-List--avatar` | Modifier | Optional.
`tc-List--condense` | Modifier | Optional.
`tc-List--extend` | Modifier | Optional.
`tc-List--static` | Modifier | Optional.
`is-active` | State | Optional.  Always should be added to the item.
`is-disabled` | State | Optional.  Always should be added to the item.
`is-updating` | State | Optional.  Always should be added to the item.

## <a name="variables"></a> SCSS Variables

Name | Type | Description
--- | --- | ---
`$tc-list-classnames` | `map` | A map of default class names.
`$tc-list-classnames.root` | `string` | Root classname.
`$tc-list-classnames.condense` | `string` | Modifier classname.
`$tc-list-classnames.avatar` | `string` | Modifier classname.
`$tc-list-classnames.extend` | `string` | Modifier classname.
`$tc-list-classnames.static` | `string` | Modifier classname.
`$tc-list-classnames.child-item` | `string` | Child classname.
`$tc-list-classnames.child-item-media` | `string` | Child classname.
`$tc-list-classnames.child-item-text` | `string` | Child classname.
`$tc-list-classnames.child-item-meta` | `string` | Child classname.
`$tc-list-classnames.child-item-primary` | `string` | Child classname.
`$tc-list-classnames.child-item-ancillary` | `string` | Child classname.
`$tc-list-classnames.state-disabled` | `string` | State classname.
`$tc-list-classnames.state-updating` | `string` | State classname.
`$tc-list-classnames.state-active` | `string` | State classname.
`tc-list-horizontal-padding` | `string` | Add horizontal padding to the list items.
`tc-list-text-offset` | `string` | Used to adjust the margin for a media element.
`$tc-list-item-text-primary-leading` | `string` | Adjust the leading for primary text elements.
`$tc-list-item-text-ancillary-leading` | `string` | Adjust the leading for ancillary text elements.
`$tc-list-condense-item-text-primary-leading` | `string` | Adjust the leading for primary text elements in a condense list.

## <a name="mixins"></a> Mixin Interface

Catalogs mixins that are marked for public interfacing.

Name | Arguments | Description
--- | --- | ----
`tc-list-base` | none | Adds rules to the root component.
`tc-list-item-base` | none | Adds rules to the items of a list.
`tc-list-media-base` | none | Adds rules to media element of an item.
`tc-list-color` | `$color`<sup>*</sup> | Adds a color rule to a ruleset.
`tc-list-bacground-color` | `$color`<sup>*</sup> | Add a background color rule to a ruleset.
`tc-list-text-media-color` | `$color`<sup>*</sup> | Specifically adds a color rule to a media item ruleset.

<sup>*</sup> Argument value requires a valid `$style` for the `tc-theme-prop` mixin.

## <a name="functions"></a> Functions

Name | Argument | Description
--- | --- | ---
`tc-list-classname` | `$name` | Requires `$tc-list-classnames` map and name is a valid prop that returns a class name string.
