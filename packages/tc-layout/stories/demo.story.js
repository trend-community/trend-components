import React, { Component, Fragment } from 'react';

import Topbar from 'packages/tc-topbar';
import Menu from 'packages/tc-icon/Menu';
import { DrawerOverlay as Drawer } from 'packages/tc-drawer';
import Layout, { LayoutContext, withLayoutConsumer } from '../';

function MenuButton({ layout, ...rest }) {
  return <button {...rest}
    aria-expanded={layout.hasActiveDrawer}
    aria-haspopup
    onClick={layout.toggleDrawer}
    tabIndex={0}
    type="button">
    <Menu aria-hidden />
    <span className="tc-display-visually-hide">Drawer button</span>
  </button>
}

const EnhancedMenuButton = withLayoutConsumer(MenuButton);

function AppDrawer({ layout, ...rest }) {
  return <Drawer open={layout.hasActiveDrawer} onToggle={layout.toggleDrawer}>
    { api => (
      <Fragment>
        <div {...api.getHdProps()}>
          <h1 {...api.getTitleProps()}>Title</h1>
          <h2 {...api.getSubtitleProps()}>SubTitle</h2>
        </div>
        <div {...api.getInnerProps({className: 'tc-phb'})}>
          <a className="tc-display-block"
            href="#"
            onClick={evt =>{
              evt.preventDefault();
              layout.toggleDrawer();
            }}>
            link 1
          </a>
          <a className="tc-display-block"
            href="#"
            onClick={evt =>{
              evt.preventDefault();
              layout.toggleDrawer();
            }}>
            link 2
          </a>
          <button className="tc-display-block"
            onClick={layout.toggleDrawer}>
            link 3
          </button>
        </div>
      </Fragment>
    )}
  </Drawer>;
}

const EnhancedDrawer = withLayoutConsumer(AppDrawer);

function Wrapper() {
  return <Layout>
    <Topbar fixed>
      {api =>(
        <header {...api.getElementProps()}>
          <div {...api.getInnerProps()}>
            <div {...api.getSectionProps()}>
              <EnhancedMenuButton {...api.getIconProps()} />
              <h1 {...api.getTitleProps()}>TREND Components</h1>
            </div>
          </div>
        </header>
      )}
    </Topbar>
    <EnhancedDrawer />
    <div className="tc-layout-relative tc-size-full">
      <div className="tc-phb tc-has-Topbar--fixed">
        Lorem ispum... <a href="#">link</a>.
      </div>
    </div>
  </Layout>;
}

function Story() {
  return <Wrapper />;
}

Story.displayName = 'Demo';

export default Story;
