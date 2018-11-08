# Type

Apply consistent typographic styling to project.

* [Installation](#installation)
* [Basic Usage](#usage)
* [Default Typography](#default)
* [Classes](#classes)
* [Variables](#variables)

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

## <a name="default"></a> Default Typography

# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6

**Paragraph** Lorem ipsum dolor sit amet consectetur adipiscing, elit felis auctor cras tempus ligula, est gravida mi bibendum fermentum. Suspendisse erat turpis volutpat molestie et dignissim interdum, eu hac sagittis ultrices vitae vestibulum ligula placerat, blandit tempor arcu orci mi pellentesque. Aliquam nisi hac aliquet posuere ullamcorper proin quam nunc quisque, lobortis facilisi dapibus nibh iaculis semper nam vestibulum, scelerisque montes facilisis pretium cubilia cursus turpis risus.

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

## <a name="variables"></a> Variables

Name | Type | Notes
--- | --- | ---
`$tc-type-font-size-root` | `String` | Defaults to 16px.
`$tc-type-font-famly` | `Variables` | `$helvetica` from tc-type addon font-stacks.
`$tc-type-base` | `Map` | Key/value pairs of css property/value.
`tc-type-font-weights` | `Map` | Keys: thin, light, regular, medium, bold, and black.
`$tc-type-styles` | `Map` | Keys: h1, h2, h3, h4, h5, h6, subtitle1, subtitle2, body1, body2, caption, button.
