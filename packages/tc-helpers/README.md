# Helpers

Trend Helpers are a combination of functions, mixins, variables, and class selectors to scaffold, prototype, or build out UI.  For the most part, this package is used throughout all the individual packages.

* [Installation](#installation)
* [Basic Usage](#usage)
* [Variables](#variables)
* [Background Helpers](#background)
* [Border Helpers](#border)
* [Display Helpers](#display)
* [Flex Helpers](#flex)
* [Image Helpers](#image)
* [Link Helpers](#link)
* [List Helpers](#list)
* [Layout Helpers](#layout)
* [Margin Helpers](#margin)
* [Padding Helpers](#padding)
* [Shadow Helpers](#shadow)
* [Size Helpers](#size)
* [Text Helpers](#text)
* [Whitespace Helpers](#whitespace)
* [Mixins](#mixins)
* [Functions](#functions)

## <a name="installation"></a> Installation

```bash
npm install @trend/helpers
```

## <a name="usage"></a> Basic Usage

```css
// Import entire package contents.
@import "@trend/helpers/styles";

// Import classes only.
@import "@trend/helpers/scss/helpers";

// Import specific pieces.
@import "@trend/helpers/scss/variables";
@import "@trend/helpers/scss/functions";
@import "@trend/helpers/scss/mixins";

// Import even more granular pieces.
@import "@trend/helpers/scss/functions/relative-units";
@import "@trend/helpers/scss/mixins/rtl";
@import "@trend/helpers/scss/addons/easing-variables";
```

## <a name="variables"></a> Variables

Base package variables shared between indiviudal Helpers and also used for providing consistent values between other **TREND component** packages.

- `$tc-spacings` - `map` of n (none), s (small), m (medium), l (large)
- `$tc-breakpoints` - `map` of xs, sm, md, lg, xl
- `$tc-proportional-sizes` - `list` of default proportional sizes

## Variables

**SCSS Variables**

- `$tc-helper-variables` - `map` of css variables to generate

**CSS Variables**

- `--tc-helper-transition-duration`
- `--tc-helper-transition-timing-function`


## <a name="variables"></a> Variables

Base package variables shared between indiviudal Helpers and also used for providing consistent values between other **TREND component** packages.

- `$tc-spacings` - `map` of n (none), s (small), m (medium), l (large)
- `$tc-breakpoints` - `map` of xs, sm, md, lg, xl
- `$tc-proportional-sizes` - `list` of default proportional sizes

## Variables

**SCSS Variables**

- `$tc-helper-variables` - `map` of css variables to generate

**CSS Variables**

- `--tc-helper-transition-duration`
- `--tc-helper-transition-timing-function`

## <a name="background"></a> Background Helpers

**Variables**

- `$tc-has-background` - Turn on/off available classes
- `$tc-has-background-media` - Turn on/off media classes
- `$tc-background-breakpoints` - List of breakpoints to generate media queries
- `$tc-backgrounds` - Map of rulesets to generate, values can be a `$tc-color-<color-map>` variable

**Available classes**

- `tc-background-transparent` - Background color `transparent`
- `tc-background-<color>-<weight>` - Background color weight from color map

## <a name="borders"></a> Border Helpers

**Variables**

- `$tc-has-border` - Turn on/off helper classes
- `$tc-has-border-media` - Turn on/off media classes
- `$tc-border-breakpoints` - List of breakpoints to generate media queries
- `$tc-border-width` - Default width in pixels
- `$tc-border-color` - Default `color` type
- `$tc-border-radius` - Default radius value in pixels
- `$tc-borders` - `map` of `border-<position>` rulesets
- `$tc-border-radii` - `map` of `border-<position>-radius` rulesets
- `$tc-border-colors` - `map` of `border-color` rulesets

**Available classes**

- `tc-border`
- `tc-border-<top|right|bottom|left|none>`
- `tc-border-<top|right|bottom|left>-0`
- `tc-border-round`
- `tc-border-round-<top|right|bottom|left|none>`
- `tc-border-round-top-<left|right>`
- `tc-border-round-bottom-<right|left>`
- `tc-border-rounded`
- `tc-border-<color>-<weight>`

## <a name="display"></a> Display Helpers

**Variables**

- `$tc-has-display` - Turn on/off available classes
- `$tc-has-display-media` - Turn on/off media classes
- `$tc-display-breakpoints` - List of breakpoints to generate media queries
- `$tc-displays` - List of rulesets to generate

**Available classes**

- `tc-display-block` - Display `block`
- `tc-display-inline` - Display `inline`
- `tc-display-inline-block` - Display `inline-block`
- `tc-display-flex` - Display `flex`
- `tc-display-none` - Display `none`
- `tc-display-table` - Display `table`
- `tc-display-table-cell` - Display `table-cell`
- `tc-display-table-row` - Display `table-row`
- `tc-display-visually-hide` - Visually hide an element but leave available to screenreaders

## <a name="flex"></a> Flex Helpers

**Variables**

- `$tc-has-flex`: Turn on/off helper classes
- `$tc-has-flex-media`: Turn on/off media classes
- `$tc-flex-breakpoints`: List of breakpoints to generate media queries
- `$tc-flex`: `map` of rulesets

**Available classes**

- `tc-flex` - display `flex`
- `tc-flex-inline` - display `inline-flex`
- `tc-flex-wrap` - flex-wrap `wrap`
- `tc-flex-nowrap` - flex-wrap `nowrap`
- `tc-flex-wrap-reverse` - flex-wrap `wrap-reverse`
- `tc-flex-row` - flex-direction `row`
- `tc-flex-row-reverse` - flex-direction `row-reverse`
- `tc-flex-column` - flex-direction `column`
- `tc-flex-column-reverse` - flex-direction `column-reverse`
- `tc-flex-between` - justify-content `space-between`
- `tc-flex-center` - justify-content `center`
- `tc-flex-justify` - justify-content `space-around`
- `tc-flex-left` - justify-content `flex-start`
- `tc-flex-right` - justify-content `flex-end`
- `tc-flex-baseline` - align-items `baseline`
- `tc-flex-bottom` - align-items `flex-end`
- `tc-flex-middle` - align-items `center`
- `tc-flex-stretch` - align-items `stretch`
- `tc-flex-top` - align-items `flex-start`
- `tc-flex-baseline-content` - align-content `baseline`
- `tc-flex-bottom-content` - align-content `flex-end`
- `tc-flex-middle-content` - align-content `center`
- `tc-flex-stretch-content` - align-content `stretch`
- `tc-flex-top-content` - align-content `flex-start`
- `tc-flex-item-auto` - item-auto `auto`
- `tc-flex-item-center` - item-auto `center`
- `tc-flex-item-left` - item-auto `flex-start`
- `tc-flex-item-right` - item-auto `flex-end`
- `tc-flex-item-stretch` - item-auto `stretch`
- `tc-flex-grow1` - flex `1 1 0%`
- `tc-flex-grow2` - flex `2 1 0%`
- `tc-flex-grow3` - flex `3 1 0%`
- `tc-flex-grow4` - flex `4 1 0%`
- `tc-flex-grow5` - flex `5 1 0%`
- `tc-flex-shrink` - flex shrink `0`
- `tc-flex-shrink1` - flex shrink `1`
- `tc-flex-shrink2` - flex shrink `2`
- `tc-flex-shrink3` - flex shrink `3`
- `tc-flex-shrink4` - flex shrink `4`
- `tc-flex-shrink5` - flex shrink `5`
- `tc-flex-basis-auto` - flex-basis `auto`
- `tc-flex-basis0` - flex-basis `0`

## <a name="image"></a> Image Helpers

**Variables**

- `$tc-has-image` - Turn on/off available classes
- `$tc-has-image-media` - Turn on/off media classes
- `$tc-image-breakpoints`: List of breakpoints to generate media queries
- `$tc-image` - Map of rulesets to generate

**Available classes**

- `tc-image-fluid` - responsive image
- `tc-image-circle` - circular images

## <a name="link"></a> Link Helpers

**Variables**

- `$tc-has-link` - Turn on/off available classes
- `$tc-has-link-media` - Turn on/off media classes
- `$tc-link-breakpoints`: List of breakpoints to generate media queries
- `$tc-link` - Map of rulesets to generate

**Available classes**

- `tc-link-plain` - text-decoration `none`
- `tc-link-decorate` - text-decoration `underline`
 - **NOTE** Will apply rule just the `:hover`, `:focus`, and `:active` pseudoclasses

## <a name="list"></a> List Helpers

**Variables**

- `$tc-has-list` - Turn on/off available classes
- `$tc-has-list-media` - Turn on/off media classes
- `$tc-list-breakpoints`: List of breakpoints to generate media queries
- `$tc-list` - Map of rulesets to generate

**Available classes**

- `tc-list-styleless` - strip all `margin`, `padding` and `list-style`
- `tc-list-inline` - horizontal list

## <a name="layout"></a> Layout Helpers

**Variables**

- `$tc-has-layout` - Turn on/off available classes
- `$tc-has-layout-media` - Turn on/off media classes
- `$tc-layout-breakpoints`: List of breakpoints to generate media queries
- `$tc-layouts` - Map of rulesets to generate

**Available classes**

- `tc-layout-absolute` - Position `absolute`
- `tc-layout-clip` - Render new block formatting context
- `tc-layout-relative` - Position `relative`
- `tc-layout-static` - Position `static`
- `tc-layout-scroll-x` - Turn on horizontal scrolling an element
- `tc-layout-scroll-y` - Turn on vertical scrolling an element
- `tc-layout-pull` - Float `left`
- `tc-layout-push` - Float `right`
- `tc-layout-absolute-center` - Center an element `absolute` position
- `tc-layout-fixed-center` - Center an element with `fixed` position
- `tc-layout-absolute-viewport` - Positon `absolute` to be size of viewport
- `tc-layout-fixed-viewport` - Positon `fixed` to be size of viewport
- `tc-layout-clearfix` - Apply clearfix to an element

## <a name="margin"></a> Margin Helpers

**Variables**

- `$tc-has-margin` - Turn on/off available classes
- `$tc-has-margin-media` - Turn on/off media classes
- `$tc-margin-breakpoints` - List of breakpoints to generate media queries
- `$tc-margin-spacings` - map of spacing values
- `$tc-margin` - Map where key is property name for rule and suffix for selector

**Available classes**

- `tc-m<t|r|b|l><n|s|m|l|a>` - `margin-<top|right|bottom|left|right>` rule

## <a name="padding"></a> Padding Helpers

**Variables**

- `$tc-has-padding` - Turn on/off available classes
- `$tc-has-padding-media` - Turn on/off media classes
- `$tc-padding-breakpoints` - List of breakpoints to generate media queries
- `$tc-padding-spacings` - map of spacing values
- `$tc-padding` - Map where key is property name for rule and suffix for selector

**Available classes**

- `tc-p<t|r|b|l><n|s|m|l|a>` - `padding-<top|right|bottom|left|right>` rule

## <a name="shadow"></a> Shadow Helpers

**Variables**

- `$tc-has-shadow` - Turn on/off available classes
- `$tc-has-shadow-media` - Turn on/off media classes
- `$tc-shadow-breakpoints` - List of breakpoints to generate media queries
- `$tc-shadow` - Number of shadows levels to create, defaults to `24`
- `$tc-shadow-color` - Default shadow color, defaults to `#000`

**Available classes**

- `tc-shadow-<1-24>` - box-shadow rule

## <a name="size"></a> Size Helpers

**Variables**

- `$tc-has-size` - Turn on/off available classes
- `$tc-has-size-media` - Turn on/off media classes
- `$tc-size-breakpoints` - List of breakpoints to generate media queries
- `$tc-size` - Map of rulesets to generate
- `$tc-sizes` - Defaults to `$tc-proportional-sizes`

**Available classes**
(numerous) - Create a proportional width rule
  - `x` is an integer less than `Y`
  - `Y` is can be any one of the `tc-proportional-sizes` (e.g 2, 3, 4, 5...)
- `tc-size-compact` - Use `flex-basis` to wrap its content
- `tc-size-occupy` - Use `flex` and `flex-basis` to occupy remaing space
- `tc-size-full` - Make element width of parent
- `tc-size-<xofY>` 

## <a name="text"></a> Text Helpers

**Variables**

- `$tc-has-text` - Turn on/off available classes
- `$tc-has-text-media` - Turn on/off media classes
- `$tc-text-breakpoints` - List of breakpoints to generate media queries
- `$tc-text` - Map of rulesets to generate
- `$tc-text-colors` - Map of color variables

**Available classes**

- `tc-text-<left|center|right|justify>` - Adjust `text-align` of an element
- `tc-text-<top|middle|bottom|baseline` - Adjust `vertical-align` of an element
- `tc-text-truncate` - Add ellipsis to overflowing text
  - **NOTE** Requires `text-truncate` mixin
- `tc-text-break` - word-wrap `break-word`
- `tc-text-inherit-color` - Make an element inherit color of parent
- `tc-text-<justify|uppercase|lowercase|capitalize>` - Transform text
- `tc-text-sentence-case` - Capitlize first letter of a sentence
- `tc-text-<normal|nowrap|preline>` - Adjust whitespace of text
- `tc-text-<color>-<weight>` - Adjust text color
  - `color` is name of a color map
  - `weight` is the color weight from map

## <a name="whitespace"></a> Whitespace Helpers (Append/Prepend)

Append (after) or prepend (before) whitespace to an HTML element.

**Variables**

- `$tc-has-<append|prepend>` - Turn on/off available classes
- `$tc-has-<append|prepend>-media` - Turn on/off media classes
- `$tc-<append|prepend>-breakpoint-keys` - What breakpoints should be generated
- `$tc-<append|prepend>-sizes` - Size ruleset to generate, defaults `$tc-proportional-sizes`

**Available classes**

- `tc-<append|prepend>-<xofY>` (numerous) - Create a proportional margin rule
  - `x` is an integer less than `Y`
  - `Y` can be any one of the `tc-proportional-sizes` (e.g 2, 3, 4, 5...)

## <a name="mixins"></a> Mixins

Todo.

## <a name="funcions"></a> Functions

Todo.
