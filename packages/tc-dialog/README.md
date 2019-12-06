# Dialog (Modal)

[React](https://reactjs.org/) accessbile `Dialog` component that implements the [WAI-ARIA Dialog (Modal)](https://www.w3.org/TR/wai-aria-practices/#dialog_modal) instructions.

* [Installation](#installation)
* [Basic Usage](#usage)
* [Exports](#exports)
* [Props API](#props)

## <a name="installation"></a> Installation

```bash
## Has peer dependency with react and react-dom
npm install react react-dom
npm install @trend/dialog
```

## <a name="usage"></a> Basic Usage

With a module bundler like [webpack](https://webpack.js.org/), use as you would anything else:

```JavaScript
// Using ES6 modules.
import React from 'react';
import ReactDom from 'react-dom';

import Dialog, {
  DialogActions,
  DialogActionButton,
  DialogBox,
  DialogBody,
  DialogButton,
  DialogMask,
  DialogTitle,
  useDialogState
} from '@trend/dialog';

function DemoDialog() {
  const state = useDialogState({
    titleId: 'tc-dialog-title',
    bodyId: 'tc-dialog-body'
  });

  return (
    <>
      <DialogButton {...state}>Open Dialog</DialogButton>
      <Dialog {...state} aria-label="DemoDialog">
        <DialogBox>
          <DialogTitile {...state}>Dialog Title</DialogTitile>
          <DialogBody {...state}>
            The main content area of the dialog.  This area can have a form, a list, paragraphs of text, and so on.
          </DialogBody>
          <DialogActions>
            <DialogActionButton onClick={state.hide}>
              No
            </DialogActionButton>
            <DialogActionButton accent>
              Yes
            </DialogActionButton>
          </DialogActions>
        </DialogBox>
      </Dialog>
    </>;
  )
};

ReactDom.render(<DemoDialog />, document.getElementById('root'));
```

## <a name="exports"></a> Exports

Below are examples on how to import each of the modules.

```JavaScript
import Dialog, {
  DialogActions,
  DialogActionButton,
  DialogBox,
  DialogBody,
  DialogButton,
  DialogMask,
  DialogTitle,
  useDialogState
} from '@trend/dialog'

// or
import Dialog, { useDialog } from '@trend/Dialog/Dialog';
import useDialogState from '@trend/Dialog/useDialogState';
import DialogBox, { useDialogBox } from '@trend/Dialog/DialogBox';
import DialogBody, { useDialogBody } from '@trend/Dialog/DialogBody';
import DialogActions, { useDialogActions } from '@trend/Dialog/DialogActions';
import DialogButton, { useDialogButton } from '@trend/Dialog/DialogButton';
import DialogTitle, { useDialogTitle } from '@trend/Dialog/DialogTitle';
```

## <a name="props"></a> Props API

### useDialogState

Inherits from `useDisclosureState` from the `@trend/disclosure` package.

**bodyId**

> `string` | Defaults to `undefined`.

Syncs up the `aria-describedby` attribute on the main dialog component with the `id` attribute on the body component.  **NOTE** Do not forget to add the state to the `DialogBody` component.  Will override the `id` prop directly added to the dialog body if `bodyId` is added.

**disclosureId**

> `string` | Defaults to 'tc-disclosure-##'.

A unique id to link the button and disclosure element for accessibility.

**hide**

> `function`

Will set `visible` to `false`.

**show**

> `function`

Will set `visible` to `true`.

**toggle**

> `function`

Will toggle `visible` state.

**titleId**

> `string` | Defaults to `undefined`.

Syncs up the `aria-labelledby` attribute on the main dialog component with the `id` attribute on the title component.  **NOTE** Do not forget to add the state to the `DialogTitle` component.  Will override an `id` prop that is directly added to the dialog title if `titleId` is added.

**visible**

> `boolean` | Optional. Defaults to `false`.

Indicates whether or not component is visible in the UI.

### Dialog

**as**

> `string || Component` | Optional. Defaults to `div`.

Change the underlying element.

**clickOutsideDeactivates**

> `boolean` | Defaults to `true`.

Clicking outside dialog component closes the dialog and deactivates the focus trap.  Will close all nested dialogs as well when click is detected outside main dialog.

**escapeDeactivates**

> `boolean` | Defaults to `true`.

Close the dialog when the user presses the escape key and deactivate the focustrap.

**fallbackFocus**

> `element|string|function` | Optional.

By default, an error will be thrown if the dialog is visible with no elements is its tab order.  With this prop you can specify a fallback element to programmatically receive focus if no other tabbable elements are found.

**hasMask**

> `boolean` | Defaults to `false`.

Add an optional mask to the dialog.  Only recognized when dialog is set to modal and renders in a portal.

**initialFocus**

> `element|string|function` | Optional.

By default, when the dialog is visible the first element in the tab order will receive focus.  With this prop you can specify a different element to receive that initial focus.

**modal**

> `boolean` | Defaults to `true`.

Will adjust the `modal` state of the dialog:

- When true will prevent the body from scrolling, wrap the dialog in a `Portal` and trap the focus.
- For non-modal dialogs, will preserve the body scroll and not trap focus.

**preventBodyScroll**

> `boolean` | Defaults to `true`.

When enabled the user will be prevented from scrolling the page.  This prop has no effect when `modal` is set to `false`.

**portal**

> `boolean` | Defaults to `modal` which defaults to `true`.

Will wrap the dialog in a `Portal`.

**returnFocusOnDeactivate**

> `boolean` | Optional, defaults to `false`.

If `false`, when the dialog closes, focus will not return to the the element that had focus before activation.

**rootElement**

> `string` | Defaults to `undefined`.  A valid css selector.

This will toggle an `aria-hidden` attribute to the selector passed to this prop.  This is a suggested fallback when all static non-modal content lives under a single element, which is a common scenario with react applications.  [Cilck here](https://www.w3.org/TR/wai-aria-practices/#dialog_roles_states_props) to read more.

**setReturnFocus**

> `element|string|function` | Optional.

By default, the dialog will return focus to the element last focused before being opened.  With this porps you can specify another element that will receive focus after the dialog is closed.

**shouldTrap**

> `boolean` | Defaults to `modal` which defaults to `true`.

Whether or not the dialog should trap focus when opened.

**variants**

> `string` | Defaults to empty string.  Can be either `scroll || stacked`.

Adds a modifier class to the main dialog component.

<details>
<summary>State props</summary>

> These props are generated from the state hook.

- `bodyId` `string`

Sets the `aria-describedby` attribute to sync with the `DialogBody`.

- `disclosureId` `string`

A unique id to link the button and disclosure element for accessibility.

- `hide` `function`

Will set `visible` to `false`.

- `titleId` `string`

Sets the aria-labelledy attribute to sync with the `DialogTitle`.

**visible**

> `boolean`

Indicates whether or not component is visible in the UI.

</details>

### DialogTitle

Add a header for the dialog.

**as**

> `string || Component` | Optional. Defaults to `h2`.

Change the underlying element.

<details>

<summary>State props</summary>

> These props are generated from the state hook.

- `titleId` `string`

Sets the `id` attribute which is synced to the `aria-labelledby` attribute for the `Dialog`.
</details>

### DialogBody

The main content area for the dialog.

**as**

> `string || Component` | Optional. Defaults to `div`.

Change the underlying element.

<details>

<summary>State props</summary>

> These props are generated from the state hook.

- `bodyId` `string`

Sets the `id` attribute which is synced to the `aria-labelledby` attribute for the `Dialog`.
</details>

### DialogButton

The disclosure button for the dialog.  Composed from `@trend/button` and inherits the props api.

**as**

> `string || Component` | Optional. Defaults to `button`.

Change the underlying element.

<details>
<summary>State props</summary>

> These props are generated from the state hook.

- `visible` `boolean`

Indicates whether or not component is visible in the UI.

- `disclosureId` `string`

The `id` that syncs the button with the dialog.

- `toggle` `function`

Toggles the visible state of the dialog.
</details>

### DialogActions

Contains the action buttons for the dialog.

**as**

> `string || Component` | Optional. Defaults to `div`.

Change the underlying element.

### DialogActionButton

A button that is a direct child of the `DialogActions` component.  Composed from `@trend/button` and inherits the props api.

**as**

> `string || Component` | Optional. Defaults to `button`.

Change the underlying element.
