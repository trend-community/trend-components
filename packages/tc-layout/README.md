# Layout

**TREND Components** layout manager for handling global state.  Main use case is for handling **Drawer** (Overlay) state from another component in the tree.

* [Installation](#installation)
* [Basic Usage](#usage)
* [Layout Provider](#provider)
* [withLayoutConsumer](#consumer)
* [Layout prop](#layout)
* [Example](#example)

## <a name="installation"></a> Installation

```bash
## Has peer dependency with react and react-dom
npm install react react-dom
npm install @trend/layout
```

## <a name="usage"></a> Basic Usage

With a module bundler like [webpack](https://webpack.js.org/), use as you would anything else:

```javascript
// Import main Layout provider.
import Layout from '@trend/layout';

// Import layout context.
import { LayoutContext } from '@trend/layout';

// Import higher-order component layout consumer.
import { withLayoutConsumer } from '@trend/layout';
```

## <a name="provider"></a> Layout Provider

Wrap a **TREND** application with the main provider near the top of the render tree.

```javascript
import Layout from '@trend/layout';

function App() {
  return <Layout>
    {...}
  </Layout>
}
```

## <a name="consumer"></a> withLayoutConsumer

Use `withLayoutConsumer` [higher-order](https://reactjs.org/docs/higher-order-components.html) component to gain access to layout state.

```javascript
import { withLayoutConsumer } from '@trend/layout';

function Button({ layout, ...props }) {
  return <button onClick={layout.toggleDrawer} type="button">
    Menu button
  </button>
}

export default withLayoutConsumer(Button);
```

## <a name="layout"></a> Layout Prop

The consumer will pass in a `layout` object as a prop to the wrapped component from the `withLayoutConsumer` higher-order component.

Prop | Type | Description
--- | --- | ---
`hasActiveDrawer` | `Boolean` | Maintains the current state of **Drawer**.
`toggleDrawer` | `Function` | Toggles the state of `hasActiveDrawer`.
`hideDrawer` | `Function` | Turns off `hasActiveDrawer`.
`showDrawer` | `Function` | Turns on `hasActiveDrawer`.

## <a name="example"></a> Example

```javascript
import { OverlayDrawer as Drawer } from '@trend/drawer';
import Topbar from '@trend/topbar';
import Layout, { withLayoutConsumer } from '@trend/layout';

function Button({ layout, ...props }) {
  return <button onClick={layout.toggleDrawer} type="button">
    Menu button
  </button>
}

const EnhancedButton = withLayoutConsumer(Button);

function AppDrawer({ layout }) {
  return <Drawer open={layout.hasActiveDrawer} onToggle={layout.toggleDrawer}>
   {api => (...)}
  </Drawer>
}

const EnhancedDrawer = withLayoutConsumer(AppDrawer);

function App() {
  return <Layout>
    <Topbar fixed>
      {api => (
        <EnhancedMenuButton {...api.getIconProps()} />
      )}
    </Topbar>
    <EnhancedDrawer />
  </Layout>;
}
```
