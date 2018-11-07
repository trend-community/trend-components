# States

Sass mixins for state transition for interactive elements.

* [Installation](#installation)
* [Basic Usage](#usage)
* [Variables](#variables)
* [Mixins](#mixins)
* [Functions](#functions)

## <a name="installation"></a> Installation

```bash
npm install @trend/state
```

## <a name="usage"></a> Basic Usage

```css
// Import all variables, mixins, and functions.
@import "@trend/state/styles";

// Import just variables.
@import "@trend/state/scss/variables";

// Import just mixins.
// NOTE: Will import variables and functions.
@import "@trend/state/scss/mixins";

// Import just functions.
// NOTE: Will import variables.
@import "@trend/state/scss/functions";
```

## <a name="variables"></a> Variables

Name | Type
--- | ---
`$tc-state-dark-color-opacities` | `Map`
`$tc-state-light-color-opacities` | `Map`

Both maps provide: `hover`, `focus`, `press`, `selected`, and `activated` keys.

## <a name="mixins"></a> Mixins

Name | Arguments | Description
--- | --- | ---
`tc-state` | `$color` (required) | Add state rules to a ruleset.
`tc-state-hover-opacity` | `$opacity` (required) | Create ruleset to adjust hover state for a interactive element.
`tc-state-focus-opacity` | `$opacity` (required) | Create ruleset to adjust focus state for a interactive element.
`tc-state-press-opacity` | `$opacity` (required) | Create ruleset to adjust active state for a interactive element.
`tc-state-base-color` | `$color` (required) | Add rule to ruleset to adjust background color of a interactive element.

## <a name="functions"></a> Functions

Name | Arguments | Description
--- | --- | ---
`$tc-state-opacity` | `$color` (Valid theme option), `$state` | Returns opacity value for desire state and color passed.
