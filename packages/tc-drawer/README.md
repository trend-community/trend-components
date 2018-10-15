# Drawer

[React](https://reactjs.org/) off-canvas menu region that can contain a title, sub-title, and a self-contained inner scrollable area.

* [Installation](#installation)
* [Basic Usage](#usage)
* [Drawer](#drawer)
* [Drawer Overlay](#overlay)
* [Drawer api](#api)

## <a name="installation"></a> Installation

```bash
## Has peer dependency with react and react-dom
npm install react react-dom
npm install @trend/Drawer
```

## <a name="usage"></a> Basic Usage

With a module bundler like [webpack](https://webpack.js.org/), use as you would anything else:

## <a name="drawer"></a> Default Drawer

```javascript
// Using ES6 modules.
import React from 'react';
import Drawer from '@trend/drawer';

const {
  getRootProps,
  getHdProps,
  getTitleProps,
  getSubtitleProps,
  getInnerProps
} = Drawer.api();

function Aside({ children }) {
  return <Drawer>
    <div {...getRootProps()}>
      <div {...getHdProps()}>
        <h1 {...getTitleProps()}>Drawer Title</h1>
        <h2 {...getSubtitleProps()}>Drawer SubTitle</h2>
      </div>
      <div {...getInnerProps({ className: 'tc-phb'})}>
        Inner Drawer area
      </div>
    </div>
  </Drawer>;
}

// or pass children as a function

function AsideChildFunction({ children }) {
  return <Drawer>
    { api => (
      <div {...api.getRootProps()}>
        <div {...api.getHdProps()}>
          <h1 {...api/getTitleProps()}>Drawer Title</h1>
          <h2 {...api.getSubtitleProps()}>Drawer SubTitle</h2>
        </div>
        <div {...api.getInnerProps({ className: 'tc-phb'})}>
          Inner Drawer area
        </div>
      </div>
    )}
  </Drawer>;
}
```

### Methods

#### API (static)

Returns an object of prop-getters for various sub-components to build out.  See [api table](#api) for getters.


## <a name="overlay"></a> Drawer Overlay

This is a controlled component, use the `open` prop to adjust the visibility
of the drawer.

```JavaScript
// Using ES6 modules.
import React from 'react';
import { DrawerOverlay as Drawer } from '@trend/drawer';

function Aside({ open, toggleDrawer }) {
  return <Drawer open={open} onToggle={toggleDrawer}>
    { api => (
      <Fragment>
        <div {...api.getHdProps()}>
          <h1 {...api.getTitleProps()}>Title</h1>
          <h2 {...api.getSubtitleProps()}>SubTitle</h2>
        </div>
        <div {...api.getInnerProps({className: 'tc-phb'})}>
          <a className="tc-display-block"
            href="#"
            onClick={this.onLinkClick}>
            link 1
          </a>
          <a className="tc-display-block"
            href="#"
            onClick={this.onLinkClick}>
            link 2
          </a>
          <button className="tc-display-block"
            onClick={this.toggleDrawer}>
            link 3
          </button>
        </div>
      </Fragment>
    )}
    </Drawer>;
}
```

**NOTE** Drawer overaly will automatically generate the root element, unlike the default `Drawer` component where the developer is responsible for implementing the root node.  The default HTML tag is a div, pass in a `tag` prop to change the default.

### Props:

#### hasMask

> `boolean` | optional, `true`

Render a mask under the drawer above the content when opened.

#### onToggle

> `function` | optional, `noop`

Function that gets called on clicks to the mask or areas outside of a drawer
while opened.

#### open

> `boolean` | required, `false`

The prop that will toggle the display of the drawer.

## <a name="api"></a>API

This API is the same for both the default and overlay drawer types.

Property | Category | Type | Description
--- | --- | --- | ---
`getRootProps` | prop getter | `function(props: object)` | Returns props to the root node Only available for default Drawer.
`getHdProps` | prop getter | `function(props: object)` | Returns props for the header sub-component.
`getTitleProps` | prop getter | `function(props: object)` | Returns props for the drawer title.
`getSubtitleProps` | prop getter | `function(props: object)` | Returns props for the drawer subtitle.
`getInnerProps` | prop getter | `function(props: object)` | Returns props for the drawer inner sub-component.
