import React, { Fragment } from 'react';

import Drawer from '../src';
import "../styles.scss";

const {
  getRootProps,
  getHdProps,
  getTitleProps,
  getSubtitleProps,
  getInnerProps
} = Drawer.api();

function Story() {
  return <Fragment>
    <Drawer>
      <div {...getRootProps()}>
        <div {...getHdProps()}>
          <h1 {...getTitleProps()}>Drawer Title</h1>
          <h2 {...getSubtitleProps()}>Drawer SubTitle</h2>
        </div>
        <div {...getInnerProps({ className: 'tc-phb'})}>
          Inner Drawer area
        </div>
      </div>
    </Drawer>
    <div className="tc-layout-relative tc-size-full tc-has-Drawer-offset">
      <div className="tc-phb">
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit curabitur iaculis, tristique conubia inceptos accumsan feugiat aliquam lectus. Quam pulvinar laoreet orci vestibulum venenatis donec blandit erat, viverra vehicula in elementum mollis lobortis sem metus gravida, vel vitae torquent posuere phasellus ridiculus ac. Ridiculus penatibus tempor aenean suspendisse mattis mi et facilisi sodales vitae inceptos, laoreet elementum libero gravida porta nec lectus fames quis.</p>
        <p>Bibendum blandit et senectus ridiculus litora neque facilisis ut id a, nostra orci placerat praesent donec metus habitant himenaeos pulvinar vestibulum vivamus, eleifend primis consequat varius vulputate fames eros feugiat sollicitudin. Hendrerit blandit auctor parturient inceptos magna vivamus quis, aptent fringilla ad tempor maecenas litora, habitant montes dignissim lectus ante morbi. Libero pellentesque lobortis proin magna est dignissim erat praesent nulla id aptent, dis mollis facilisis hac donec sodales laoreet habitasse bibendum lectus.</p>
      </div>
    </div>
  </Fragment>;
}

Story.displayName = 'Default';

export default Story;
