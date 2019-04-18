# TextField

[React](https://reactjs.org/) component that allows users to input and select text.

* [Installation](#installation)
* [Basic Usage](#usage)
* [TextField](#textfield)
* [Methods](#methods)
* [Props API](#props)


## <a name="installation"></a> Installation

```bash
## Has peer dependency with react and react-dom
npm install react react-dom
npm install @trend/textfield
```

## <a name="usage"></a> Basic Usage

With a module bundler like [webpack](https://webpack.js.org/), use as you would anything else:

## <a name="textfield"></a> TextField

### Default TextField

```javascript
// Using ES6 modules.
import React from 'react';
import TextField from '@trend/textfield';

function DefaultTextField() {
  return <div>
    <TextField>
      <TextField.Input />
      <TextField.Label children="Label" />
    </TextField>
  </div>;
}

function WithHelperText() {
  return <div>
    <TextField helperText="Here is some helper text.">
      <TextField.Input />
      <TextField.Label children="Label" />
    </TextField>
  </div>;
}

// Interact with label and input like normal react components.
function RandomTextField() {
  return <div>
    <TextField>
      <TextField.Input required onChange={() => {}} minLength={3} />
      <TextField.Label children="Label" />
    </TextField>
  </div>;
}
```
## <a name="methods"></a> Methods

### Input (static)

Add an input to a textfield.  Should only ever be a single input per textfield.  Inherits state from parent textfield through the **React** [Context API](https://reactjs.org/docs/context.html).  Interact with the input like any other **React** component.

```javascript
import TextField from '@trend/textfield';

function MyInput() {
  return <div>
    <TextField><TextField.Input {...props} /></TextField>
  </div>;
}
```

### Label (static)

Add a label to a textfield.  Should only ever be a single label per textfield.  Inherits state from parent textfield through the **React** [Context API](https://reactjs.org/docs/context.html).  Interact with the label like any other **React** component.

```javascript
import TextField from '@trend/textfield';

function MyInput() {
  return <div>
    <TextField><TextField.Label {...props} /></TextField>
  </div>;
}
```

## <a name="props"></a> Props API

### BeginningIcon

> `function` | optional

Add a beginning icon to the textfield.

```javascript
import { Data } from '@trend/icon';
import TextField from '@trend/TextField';

function BeginningIconTextField() {
  return <div>
    <TextField BeginningIcon={Data || () => <Data {...props} />}>
      //...
    </TextField>
  </div>;
}
```

### EndingIcon

> `function` | optional

Add a ending icon to the textfield.

```javascript
import { Edit } from '@trend/icon';
import TextField from '@trend/TextField';

function EndingIconTextField() {
  return <div>
    <TextField EndingIcon={Edit || () => <Edit {...props} />}>
      //...
    </TextField>
  </div>;
}
```

### cssClasses

> `object` | Optional. See below example for defaults and object shape.

Customize the classnames for component.

```javascript
// Default cssClasses prop.
// NOTE: customizing the RIM and/or TEXTAREA classnames will still be matched
// to the rim or textarea value that is matched when using the variant prop.

const cssClass = {
  ROOT: 'tc-TextField',
  BEGINNING_ICON: 'tc-TextField--beginningIcon',
  ENDING_ICON: 'tc-TextField--endingIcon',
  RIM: 'tc-TextField--rim',
  STRETCH: 'tc-TextField--stretch',
  TEXTAREA: 'tc-TextField--textarea',
  HELPER: 'tc-TextField-helper',
  ICON: 'tc-TextField-icon',
  INPUT: 'tc-TextField-input',
  LABEL: 'tc-TextField-label',
  ACTIVE: 'is-active',
  DISABLED: 'is-disabled',
  FOCUSED: 'is-focused',
  INVALID: 'is-invalid'
}
```

### disabled

> `boolean` | Optional, `false`

Render the textfield in a disabled state.

### helperText

> `string` | Optional

Add text below form control.  **NOTE**, the element rendered is a sibling to the actual textfield component and not a direct child.

### id

> `string` | Optional.  Defaults to `tc-textfield-<uniqueID>`

Syncs `input.id` with the `label.for` attributes.

### stretch

> `bool` | Optional.

Apply the stretch variant to a TextField.

### validators

> `array` | Optional.

Add custom validations or edit default validation messages.  The TextField component currenlty applies reasonable defaults for: `required`, `minLength`, and `pattern` attributes on the `TextField.Input`.

```javascript
// Validators Array format.
const validators = [
  'require|minLength|pattern',
  {
    // One of `required`, `minLength`, `pattern`, or `invalid`
    type: 'required',
    message: 'Custom message.'
  },
  function (/* input element */target) {
    // Some custom logic.

    // Return object if error.
    return {
      type, // One of `required`, `minLength`, `pattern`, or `invalid`
      message //...
    }

    // Or no error return a falsy value.
    return //undefined, null, false
  }
];

// Use default validations.
function DefaultValidations() {
  return <div>
    <TextField>
      <TextField.Input required minLength={3} pattern={...} />
    </TextField>
  </div>;
}

function CustomMessages() {
   return <div>
    <TextField validators=[{
      type: 'required',
      message: 'Please provide a value for this Textield.'
    }]>
      <TextField.Input required minLength={3} pattern={...} />
    </TextField>
  </div>;
}
```
### variant

> `string` | Optional. Needs to be one of: rim or textarea.

Adjust the appearance of a TextField.





