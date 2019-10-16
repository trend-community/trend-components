# List

[React](https://reactjs.org/) component to render a series of text content and/or images in a list format.

* [Installation](#installation)
* [Basic Usage](#usage)
* [Exports](#exports)
* [Props API](#props)

## <a name="installation"></a> Installation

```bash
## Has peer dependency with react and react-dom
npm install react react-dom
npm install @trend/list
```

## <a name="usage"></a> Basic Usage

With a module bundler like [webpack](https://webpack.js.org/), use as you would anything else:

```JavaScript
import React from 'react';
import ReactDom from 'react-dom';

import List, {
  useListState,
  ListItem,
  ListItemChild
} from '@trend/list';

function DefaultList() {
  const props = useListState();

  return (
    <List {...props}>
      <ListItem {...props}>
        <ListItemChild>Item 1</ListItemChild>
      </ListItem>
      <ListItem {...props}>
        <ListItemChild>Item 2</ListItemChild>
      </ListItem>
    </List>
  );
}

ReactDom.render(<DefaultList />, document.getElementById('root'));
```

## <a name="exports"></a> Exports

Below are examples on how to import each of the modules.

```javascript
import List, {
  useList,
  ListItem,
  useListItem,
  useStaticListItem,
  ListItemChild,
  useListItemChild,
  ListDivider,
  useListDivider,
  useListState
} from '@trend/list';

// or
import List, { useList } from '@trend/list/List';
import ListItem, {
  useListItem,
  useStaticListItem } from '@trend/list/ListItem';
import ListItemChild, { useListItemChild } from '@trend/list/ListItemChild';
import ListDivider, { useListDivider } from '@trend/list/ListDivider';
import useListState from '@trend/list/useListState';
```
## <a name="props"></a> Props API

### useListState

Inherits from `userRoverState` which is a part of the `Rover` component.

**activeId**

> `string` | Defaults to `null`.

The **id** of the list item that is currently active.

**setActive**

> `function` | Accepts one argument which is the `id` of the list time to activate.

State function that updates the `activeId`.

### List

**as**

> `string || Component` | Optional. Defaults to `ul`.

Change the underlying element.

**avatar**

> `boolean` | Optional.  Defaults to false.

Adds the avatar modifier class to the main component.

**classnameOptions**

> `object` | See below for default.

```javascript
classnameOptions = {
  root: 'tc-List',
  condense: 'tc-List--condense',
  avatar: 'tc-List--avatar',
  extend: 'tc-List--extend',
  static: 'tc-List--static'
};
```

**condense**

> `boolean` | Optional.  Defaults to false.

Adds the condense modifier class to the component.

**extend**

> `boolean` | Optional.  Defaults to false.

Adds the extend modifier class to the component.

**static**

> `boolean` | Optional.  Defaults to false.

Adds the static modifier to the component.

### ListItem

**as**

> `string || Component` | Optional. Defaults to `li`.

Change the underlying element.

**classnameOptions**

> `object` | See below for default.

```javascript
classnameOptions = {
  item: 'tc-List-item',
  disabled: 'is-disabled',
  updating: 'is-updating',
  active: 'is-active'
};
```

### ListItemChild

**as**

> `string || Component` | Optional. Defaults to `span`.

Change the underlying element.

**classnameOptions**

> `object` | See below for default.

```javascript
classnameOptions = {
  'item-media': 'tc-List-item-media',
  'item-text': 'tc-List-item-text',
  'item-meta': 'tc-List-item-meta',
  'item-primary': 'tc-List-item-text-primary',
  'item-ancillary': 'tc-List-item-text-ancillary'
};
```

**variant**

> `string` | Optional. Defaults to text, can be one of: ancillary, media, meta, primary, or text.

Create the appropriate child component to embed in a `ListItem`.
