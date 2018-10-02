# Theme

Provides a combination of functions, mixins, variables, helper classes, and base normalizations for theming any **TREND** project.

## Installation

```bash
npm install @trend/theme
```

## SCSS Variables

> `$tc-theme-options` | `map`

Available options:

- `primary`
- `accent`
- `background`
- `surface`
- `over-primary`
- `over-accent`
- `over-surface`
- `text-primary-over-background`
- `text-accent-over-background`
- `text-hint-over-background`
- `text-disabled-over-background`
- `text-icon-over-background`
- `text-primary-over-light`
- `text-accent-over-light`
- `text-hint-over-light`
- `text-disabled-over-light`
- `text-icon-over-light`
- `text-primary-over-dark`
- `text-accent-over-dark`
- `text-hint-over-dark`
- `text-disabled-over-dark`
- `text-icon-over-dark`

See `tc-theme-fetch-option` function on how to access map for values.

## CSS Variables

- `--tc-theme-primary`
- `--tc-theme-accent`
- `--tc-theme-background`
- `--tc-theme-surface`
- `--tc-theme-over-primary`
- `--tc-theme-over-accent`
- `--tc-theme-over-surface`
- `--tc-theme-text-primary-over-background`
- `--tc-theme-text-accent-over-background`
- `--tc-theme-text-hint-over-background`
- `--tc-theme-text-disabled-over-background`
- `--tc-theme-text-icon-over-background`
- `--tc-theme-text-primary-over-light`
- `--tc-theme-text-accent-over-light`
- `--tc-theme-text-hint-over-light`
- `--tc-theme-text-disabled-over-light`
- `--tc-theme-text-icon-over-light`
- `--tc-theme-text-primary-over-dark`
- `--tc-theme-text-accent-over-dark`
- `--tc-theme-text-hint-over-dark`
- `--tc-theme-text-disabled-over-dark`
- `--tc-theme-text-icon-over-dark`

## Functions

### tc-theme-fetch-option

> `string: $option` | required

Returns value of option passed in from `$tc-theme-options` variable.

### tc-theme-tone

> `color: $color` | required

Returns either "light" or "dark" from passed in color value.

### tc-theme-text-priority

> `string: $priority` | required, Existing key from `$tc-theme-text-priority` map

Returns value from key name passed in.

## Mixins

### tc-theme-prop

Generate a rule that applies the correct theme color style to the passed in property.

> `string: $property` | required | css property
> `string: $style` | required | can one of "color", "currenColor" or theme option from `$tc-theme-options`
> `boolean: $important` | optional defaults to `false` | add a important declaration to rule
> `boolean: $edgeOut` | optional defaults to `false` | avoide emitting CSS variables in Edge

## Helper Classes

Adjust the color of HTML node.

- `.tc-theme-primary`
- `.tc-theme-accent`
- `.tc-theme-background`
- `.tc-theme-surface`
- `.tc-theme-over-primary`
- `.tc-theme-over-accent`
- `.tc-theme-over-surface`
- `.tc-theme-text-primary-over-background`
- `.tc-theme-text-accent-over-background`
- `.tc-theme-text-hint-over-background`
- `.tc-theme-text-disabled-over-background`
- `.tc-theme-text-icon-over-background`
- `.tc-theme-text-primary-over-light`
- `.tc-theme-text-accent-over-light`
- `.tc-theme-text-hint-over-light`
- `.tc-theme-text-disabled-over-light`
- `.tc-theme-text-icon-over-light`
- `.tc-theme-text-primary-over-dark`
- `.tc-theme-text-accent-over-dark`
- `.tc-theme-text-hint-over-dark`
- `.tc-theme-text-disabled-over-dark`
- `.tc-theme-text-icon-over-dark`

Adjust the background of HTML node.

- `.tc-theme-primary-bg`
- `.tc-theme-accent-bg`
