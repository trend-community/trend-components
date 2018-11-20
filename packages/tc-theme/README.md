# Theme

Provides a combination of functions, mixins, variables, helper classes, and base normalizations for theming any **TREND** project.

* [Installation](#installation)
* [Basic Usage](#usage)
* [Variables](#variables)
* [Functions](#functions)
* [Mixins](#mixins)
* [Classes](#classes)

## <a name="installation"></a> Installation

```bash
npm install @trend/theme
```
## <a name="usage"></a> Basic Usage

```css
// Import entire package.
@import "@trend/theme/styles";

// Import specific pieces.
@import "@trend/theme/scss/functions";
@import "@trend/theme/scss/mixins";
@import "@trend/theme/scss/variables";
// Default (normalization styles).
@import "@trend/theme/scss/theme";
// Additional typographic helper classes.
@import "@trend/theme/scss/helpers";

// Import more granular pieces.
@import "@trend/theme/scss/functions/pow";
@import "@trend/theme/scss/functions/theme";
@import "@trend/theme/scss/mixins/theme-prop";
```

## <a name="variables"></a> Variables

**SCSS**

> `tc-theme-primary` | `string` | Color value, defaults to `$tc-color-grey` map, 500 weight.

> `tc-theme-primary-over` | `string` | Will set the appropriate color contrast according to the `$tc-theme-primary`.

> `tc-theme-accent` | `string` | Color value, defaults to `$tc-color-purple` map, 500 weight.

> `tc-theme-accent-over` | `string` | Will set the appropriate color contrast according to the `$tc-theme-accent`.

> `tc-theme-background` | `string` | Sets a color string value to be applied to the background of application.

> `tc-theme-text-colors` | `map` | Provide text colors according to light vs dark contrasts.

```css
// Default settings.
$tc-theme-text-colors: (
  dark: (
    primary: rgba($_tc-color-contrast-dark, 0.87),
    accent: rgba($_tc-color-contrast-dark, 0.5),
    hint: rgba($_tc-color-contrast-dark, 0.38),
    disabled: rgba($_tc-color-contrast-dark, 0.25),
    icon: rgba($_tc-color-contrast-dark, 0.38)
  ),
  light: (
    primary: $_tc-color-contrast-light,
    accent: rgba($_tc-color-contrast-light, 0.7),
    hint: rgba($_tc-color-contrast-light, 0.5),
    disabled: rgba($_tc-color-contrast-light, 0.5),
    icon: rgba($_tc-color-contrast-light, 0.5)
  )
) !default;
```

> `$tc-theme-options` | `map` | Primary text colors for each of the theme colors.

```css
$tc-theme-options: (
  primary: ...,
  accent: ...,
  background: ...,
  surface: ...,
  over-primary: ...,
  over-accent: ...,
  over-surface: ...,
  text-primary-over-background: ...,
  text-accent-over-background: ...,
  text-hint-over-background: ...,
  text-disabled-over-background: ...,
  text-icon-over-background: ...,
  text-primary-over-light: ...,
  text-accent-over-light: ...,
  text-hint-over-light: ...,
  text-disabled-over-light: ...,
  text-icon-over-light: ...,
  text-primary-over-dark: ...,
  text-accent-over-dark: ...,
  text-hint-over-dark: ...,
  text-disabled-over-dark: ...,
  text-icon-over-dark: ...,
);
```

See `tc-theme-fetch-option` function on how to access map for values.

**CSS**

```css
:root {
  --tc-theme-primary: ...;
  --tc-theme-accent: ...;
  --tc-theme-background: ...;
  --tc-theme-surface: ...;
  --tc-theme-over-primary: ...;
  --tc-theme-over-accent: ...;
  --tc-theme-over-surface: ...;
  --tc-theme-text-primary-over-background: ...;
  --tc-theme-text-accent-over-background: ...;
  --tc-theme-text-hint-over-background: ...;
  --tc-theme-text-disabled-over-background: ...;
  --tc-theme-text-icon-over-background: ...;
  --tc-theme-text-primary-over-light: ...;
  --tc-theme-text-accent-over-light: ...;
  --tc-theme-text-hint-over-light: ...;
  --tc-theme-text-disabled-over-light: ...;
  --tc-theme-text-icon-over-light: ...;
  --tc-theme-text-primary-over-dark: ...;
  --tc-theme-text-accent-over-dark: ...;
  --tc-theme-text-hint-over-dark: ...;
  --tc-theme-text-disabled-over-dark: ...;
  --tc-theme-text-icon-over-dark: ...;
}

// Referencing a variable in a rule.
.test {
  background-color: var(--tc-theme-accent);
}
```

## <a name="functions"></a> Functions

### tc-theme-fetch-option

> `string: $option` | required | Requires `$tc-theme-options` to be in scope.

Returns value of option passed in from `$tc-theme-options` variable.

```css
fetch-theme-option(primary);
//- #333
```

### tc-theme-tone

> `color: $color` | required

Returns either "light" or "dark" from passed in color value.

### tc-theme-text-priority

> `string: $priority` | Required, Existing key from `$tc-theme-text-priority` map

Returns value from key name passed in.

### tc-theme-accessible-color

> `string: $bg-color` | Required, existing key from `$tc-theme-options`.

> `string: $text-style` | Optional, defaults to primary.

Returns the appropriate color constrast keyword from `$tc-theme-text-colors`.

## <a name="mixins"></a> Mixins

### tc-theme-prop

Generate a rule that applies the correct theme color style to the passed in property.

> `string: $property` | required | css property

> `string: $style` | required | can be one of "color", "currenColor" or theme option from `$tc-theme-options`

> `boolean: $important` | optional, defaults to `false` | add a important declaration to rule

> `boolean: $edgeOut` | optional, defaults to `false` | avoid emitting CSS variables in Edge

```css
.tc-theme-primary-bg {
  @include tc-theme-prop(background-color, primary, true);
}

//- Outputs:
.tc-theme-primary-bg {
  background-color: #333333 !important;
  background-color: var(--tc-theme-primary, #333333) !important;
}
```

## <a name="classes"></a> Helper Classes

```html
// Adjust the color of HTML node.

<span class="tc-theme-primary">...</span>
<span class="tc-theme-accent">...</span>
<span class="tc-theme-background">...</span>
<span class="tc-theme-surface">...</span>
<span class="tc-theme-over-primary">...</span>
<span class="tc-theme-over-accent">...</span>
<span class="tc-theme-over-surface">...</span>
<span class="tc-theme-text-primary-over-background">...</span>
<span class="tc-theme-text-accent-over-background">...</span>
<span class="tc-theme-text-hint-over-background">...</span>
<span class="tc-theme-text-disabled-over-background">...</span>
<span class="tc-theme-text-icon-over-background">...</span>
<span class="tc-theme-text-primary-over-light">...</span>
<span class="tc-theme-text-accent-over-light">...</span>
<span class="tc-theme-text-hint-over-light">...</span>
<span class="tc-theme-text-disabled-over-light">...</span>
<span class="tc-theme-text-icon-over-light">...</span>
<span class="tc-theme-text-primary-over-dark">...</span>
<span class="tc-theme-text-accent-over-dark">...</span>
<span class="tc-theme-text-hint-over-dark">...</span>
<span class="tc-theme-text-disabled-over-dark">...</span>
<span class="tc-theme-text-icon-over-dark">...</span>

// Adjust the background of HTML node.

<span class="tc-theme-primary-bg">...</span>
<span class="tc-theme-accent-bg">...</span>
```
