# States

Sass mixins for state transition for interactive elements.

## Installation

```bash
npm install @trend/state
```

## Basic Usage

```scss
// Import all variables, mixins, and functions.
@import "@trend/state/index";

// Import just variables.
@import "@trend/state/variables";

// Import just mixins.
// NOTE: Will import variables and functions.
@import "@trend/state/mixins/index";

// Import just functions.
// NOTE: Will import variables.
@import "@trend/state/functions/index";
```

### Variables

Name | Type
--- | ---
`$tc-state-dark-color-opacities` | `Map`
`$tc-state-light-color-opacities` | `Map`

Both maps provide: `hover`, `focus`, `press`, `selected`, and `activated` keys.

### Mixin Interface

Name | Arguments | Description
--- | --- | ---
`tc-state` | `$color` (required) | Add state rules to a ruleset.
`tc-state-hover-opacity` | `$opacity` (required) | Create ruleset to adjust hover state for a interactive element.
`tc-state-focus-opacity` | `$opacity` (required) | Create ruleset to adjust focus state for a interactive element.
`tc-state-press-opacity` | `$opacity` (required) | Create ruleset to adjust active state for a interactive element.
`tc-state-base-color` | `$color` (required) | Add rule to ruleset to adjust background color of a interactive element.

### Function Interface

Name | Arguments | Description
--- | --- | ---
`$tc-state-opacity` | `$color` (Valid theme option), `$state` | Returns opacity value for desire state and color passed.
