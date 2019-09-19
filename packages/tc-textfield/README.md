# TextField

[React](https://reactjs.org/) component that allows users to input and select text.

* [Installation](#installation)
* [Basic Usage](#usage)
* [TextField](#textfield)
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

Exports five modules:

- `TextField`: Main component that wraps the lable and input.
- `TextFieldLabel`: Creates a label element.
- `TextFieldInput`: Creates a input element.
- `TextFieldHelper`: Helper and validation message inside a div element.  Only component that is not wrapped by `TextField`.
- `useTextFieldState`: Returns a state object to spread in each component.

```javascript
// Using ES6 modules.
import React from 'react';
import TextField, {
  useTextFieldState,
  TextFieldLabel,
  TextFieldInput,
  TextFieldHelper
} from '@trend/textfield';

function DefaultTextField() {
  const props = useTextFieldState();

  return <div>
    <TextField {...props}>
      <TextFieldInput {...props} />
      <TextFieldLabel {...props} children="Label" />
    </TextField>
  </div>;
}

function WithHelperText() {
  const props = useTextFieldState({
    helperMessage: 'Here is some helper text.'
  });

  return <div>
    <TextField {...props}>
      <TextField.Input {...props} />
      <TextField.Label {...props} children="Label" />
    </TextField>
    <TextFieldHelper {...props} />
  </div>;
}

// Interact with label and input like normal react components.
function ValidateTextField() {
  const props = useTextFieldState();

  return <div>
    <TextField {...props}>
      <TextFieldInput {...props} required onChange={() => {}} minLength={3} />
      <TextFieldLabel {...props} children="Label" />
    </TextField>
    <TextFieldHelper {...props} />
  </div>;
}

function AsTextarea() {
  const props = useTextFieldState();

  return <div>
    <TextField {...props} variant="textarea">
      <TextFieldInput {...props} as="textarea" />
      <TextFieldLabel {...props} children="Label" />
    </TextField>
    <TextFieldHelper {...props} />
  </div>;
}

function AddIcons() {
  const props = useTextFieldState();

  return <div>
    <TextField
      {...props}
      BeginningIcon={IconComponent}
      EndingIcon={() => IconComponent}>
      <TextFieldInput {...props} />
      <TextFieldLabel {...props} children="Label" />
    </TextField>
    <TextFieldHelper {...props} />
  </div>;
}
```
## <a name="props"></a> Props API

### TextField

**BeginningIcon**

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

**EndingIcon**

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

**stretch**

> `bool` | Optional.

Apply the stretch variant to a TextField.

### variant

> `string` | Optional. Needs to be one of: rim or textarea.

Adjust the appearance of a TextField.

### useTextFieldState

**classnameOptions**

> `object` | Optional. See below example for defaults and object shape.

Customize the classnames for component.

```javascript
// Default cssClasses prop.
// NOTE: customizing the RIM and/or TEXTAREA classnames will still be matched
// to the rim or textarea value that is matched when using the variant prop.

const classnameOptions = {
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

**isDisabled**

> `boolean` | Optional, `false`

Render the textfield in a disabled state.

**helperMessage**

> `string` | Optional

Add text below form control.  **NOTE**, the element rendered is a sibling to the actual textfield component and not a direct child.

**textFieldId**

> `string` | Optional.  Defaults to `tc-textfield-<uniqueID>`

Syncs `input.id` with the `label.for` attributes.

**validators**

> `array || null` | Optional. Defaults to null.

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
  const props = useTextFieldState();

  return <div>
    <TextField {...props}>
      <TextFieldInput {...props} required minLength={3} pattern={...} />
    </TextField>
  </div>;
}

function CustomMessages() {
  const props = useTextFieldState({
    validators: [{
      type: 'required',
      message: 'Please provide a value for this Textield.'
    }]
  });

  return <div>
    <TextField {...props}>
      <TextFieldInput {...props} required minLength={3} pattern={...} />
    </TextField>
  </div>;
}
```

**value**

> `string` | Optional.  Defaults to ''

The value to assign to the textfield.
