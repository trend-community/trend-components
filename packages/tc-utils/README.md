# Utils

**TREND Components** JavaScript and React utility library.  Exposes the basic building blocks from which all other **trend-components** are composed from.

* [Installation](#installation)
* [Basic Usage](#usage)
* [Scoped Utilies](#scope)

## <a name="installation"></a> Installation

This package does not list any peer dependencies, but most utilities that reside in this package require [React](https://reactjs.org/) to be installed.

```bash
npm i @trend/utils
```
## <a name="usage"></a> Basic Usage

With a module bundler like [webpack](https://webpack.js.org/), use as you would anything else:

```javascript
// Using ES6 modules.
import React from 'react';

import {
  createUseHook,
  useApp,
} from '@trend/utils';

// Or import files individually

import createUseHook from '@trend/utils/createUseHook';
import useApp from '@trend/utils/hooks/useApp';
import AppProvider from '@trend/utils/state/AppProvider';
```

Importing the **main** file will expose all utilities, alternatively importing individual files or by scoped directories is possible.  See next section for breakdown of different scopes.

## <a name="scopoe"></a> Scoped Utilies

The **main** file will allow any developer to import all utilities and destructure individual utilities as needed.  Alternatively import utilities individually or by scope.

### Root

Main utilities that are used by other **trend-components** are exposed at root the level of the package.

```javascript
import createComponent from '@trend/utils/createComponent';
import createUseHook from '@trend/utils/createUseHook';
```
### Hooks

All hook utilities are located in the **hooks** directory.

```javascript
import {
  useApp,
  useCreateElement,
  useId,
  // ...
} from '@trend/utils/hooks';

// or

import useApp from '@trend/utils/hooks/useApp';
import useCreateElement from '@trend/utils/hooks/useCreateElement';
import useId from '@trend/utils/hooks/useId';
```

### State

All state utilities are located in the **state** directory.

```javascript
import {
  AppContext,
  AppProvider
} from '@trend/utils/state';

// or

import AppContext from '@trend/utils/state/AppContext';
import AppProvider from '@trend/utils/state/AppProvider';
```

### Internal

The internal scope is vanilla javascript modules and is only used internally b/w this package and other **trend-component** packages scoped to the parent package.  It is advised to use [Lodash](https://lodash.com/) or another library of similar purpose if using any internal modules outside this project.

```javascript
import {
  env,
  has,
  isFunction,
  isNil,
  //...
} from '@trend/utils/internal';

// or

import env from '@trend/utils/internal/env';
import isFunction from '@trend/utils/internal/isFunction';
import isNil from '@trend/utils/internal/isNil';
```
