# Type

Apply consistent typographic styling to project.

* [Installation](#installation)
* [Basic Usage](#usage)
* [Variables](#variables)
* [Classes](#classes)
* [Mixins](#mixins)
* [Functions](#functions)

## <a name="installation"></a> Installation

```bash
npm install @trend/type
```
## <a name="usage"></a> Basic Usage

```css
// Import entire package.
@import "@trend/type/styles";

// Import specific pieces.
@import "@trend/scss/variables";
@import "@trend/scss/functions";
@import "@trend/scss/mixins";

// Default (normalization styles).
@import "@trend/scss/type";

// Additional typographic helper classes.
@import "@trend/scss/helpers";

// Import more granular pieces.
@import "@trend/scss/functions/modular-scale";
@import "@trend/scss/mixins/leading";
@import "@trend/scss/mixins/styles-map";
@import "@trend/scss/mixins/type";
```

## <a name="variables"></a> Variables

> `$tc-type-font-size-root` | `string` | Defaults to 16px

> `$tc-type-font-famly` | `variable` | `$helvetica` from `@trend/helpers/scss/addon/font-stacks`.

```css
@import "@trend/helpers/scss/addons/font-stacks";

$tc-type-font-family: $helvetica !default;
```

> `$tc-type-base` | `map` | Default css properties and values.

```css
$tc-type-base: (
  font-family: $tc-type-font-family,
  -moz-osx-font-smoothing: grayscale,
  -webkit-font-smoothing: antialiased
);
```

> `tc-type-font-weights` | `map` | Set of standard weights to keywords.

```css
$tc-type-font-weights: (
  thin: 100,
  light: 300,
  regular: 400,
  medium: 500,
  bold: 700,
  black: 900
) !default;
```

> `$tc-type-styles` | `map` | Set of standard typographic styles.

```css
$tc-type-styles: (
  // Maps of rules to add to rulesets.
  h1: (...),
  h2: (...),
  h3: (...),
  h4: (...),
  h5: (...),
  h6: (...),
  subtitle1: (...),
  subtitle2: (...),
  body1: (...),
  body2: (...),
  caption: (...),
  button: (...)
) !default;
```

## <a name="classes"></a> Classes

Adjust typographic appearance of any HTML element with `tc-type` helper class.

```markup
  <span class="tc-type-h1">...</span>
  <span class="tc-type-h2">...</span>
  <span class="tc-type-h3">...</span>
  <span class="tc-type-h4">...</span>
  <span class="tc-type-h5">...</span>
  <span class="tc-type-h6">...</span>
  <span class="tc-type-subtitle1">...</span>
  <span class="tc-type-subtitle2">...</span>
  <span class="tc-type-body1">...</span>
  <span class="tc-type-body2">...</span>
  <span class="tc-type-caption">...</span>
```

## <a name="mixins"></a> Mixins

### tc-styles-map

Create rules from a map of rules. Not recursive, will only work on a single level maps.

> `map: $map` | Required | Map that has key/value pairs that will work as css properties with corresponding css values.

```css
@import "@trend/type/styles";
// or 
@import "@trend/type/scss/mixins";
// or 
@import "@trend/type/scss/mixins/styles-map";

$header: (
  font-size: 20px,
  font-weight: bold,
  text-transform: inherit
);

.h2 {
  @include tc-styles-map($header);
}
```

### tc-type

Add **type** map to an existing ruleset.  Usage of this mixin requires that `$tc-type-styles` is in scope.

> `string: $style` | required | One of h1, h2, h3, h4, h5, h6, subtitle1, subtitle2, body1, body2, caption, button.

> `boolean: $important` | Optional, Defaults to false | Add !important declaration to each rule.

```css
@import "@trend/type/styles";
// or 
@import "@trend/type/scss/mixins";
// or 
@import "@trend/type/scss/mixins/type";

.Button {
  @include tc-type(button);
}
```

## <a name="functions"></a> Functions

### tc-modular-scale

alias: **tc-ms**

Increments up or down a defined scale and returns an adjusted value.

> `number: $value` | Required

> `number: $increment` | Required | Increment the value (e.g. -2, -1, 0...)

> `string: $ratio` | Optional, defaults to `$major-third` | Values should align with `@trend/helpers/scss/addons/ratio-variables`.

```css
// Increment up by 1 with a ratio of 1.2
font-size: ms(16px, 1, 1.25);
// returns 20.00

// Increment down by 1 with a ratio of 1.2
font-size: ms(16px, -1, 1.25);
// returns 12.800
```
