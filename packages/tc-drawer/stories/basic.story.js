import React, { Fragment } from 'react';

import Topbar from "packages/trend-react-components/Topbar";
import Drawer from '../src';
import "../styles.scss";

const {
  getRootProps,
  getHdProps,
  getTitleProps,
  getSubtitleProps,
  getInnerProps
} = Drawer.getStateAndHelpers();

function Story() {
  return <Fragment>
    <Drawer>
      <div {...getRootProps()}>
        <div {...getHdProps()}>
          <h1 {...getTitleProps()}>Title</h1>
          <h2 {...getSubtitleProps()}>SubTitle</h2>
        </div>
        <div {...getInnerProps({ className: 'tc-phb'})}>
          Inner Drawer
        </div>
      </div>
    </Drawer>
    <div className="tc-layout-relative tc-size-full tc-has-Drawer-offset">
      <Topbar>
        { helpers =>
          <header {...helpers.getElementProps()}>
            <div {...helpers.getInnerProps()}>
              <div {...helpers.getSectionProps({ position: 'start' })}>
                <h1 {...helpers.getTitleProps()}>TREND Drawer Component</h1>
              </div>
            </div>
          </header>
        }
      </Topbar>
      <div className="tc-phb">
        <p>lorem ipsum...</p>
      </div>
    </div>
  </Fragment>;
}

Story.displayName = 'Basic';

export default Story;
