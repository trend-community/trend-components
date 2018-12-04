import React from 'react';
import {
  array,
  boolean,
  text,
  select
} from '@storybook/addon-knobs/react';

import Topbar from '../src';

function Menu() {
  return <svg
    viewBox="0 0 20 14"
    style={{ fill: "currentColor", height: "auto", width: "inherit" }}>
    <title>Menu</title>
    <path className="path"
      d="M18,21H38v2H18V21Zm0,6H38v2H18V27Zm0,6H38v2H18V33Z"
      transform="translate(-18 -21)" />
  </svg>;
}

function ComponentStory() {
  const compact = boolean('Compact', false);
  const fixed = boolean('Fixed', false);
  const fixedScroll = boolean('Fixed scroll', false);
  const tall = boolean('Tall', false);

  const style = {}

  if (fixed || fixedScroll) {
    style.paddingTop = tall ? '128px' : '64px';
  }

  return <React.Fragment>
    <Topbar
      compact={compact}
      fixed={fixed}
      fixedScroll={fixedScroll}
      tall={tall}>
      {api => (
        <header {...api.getElementProps()}>
          <div {...api.getInnerProps()}>
            <div {...api.getSectionProps({ position: 'start' })}>
              <button {...api.getIconProps({ type: 'button' })}>
                <Menu size={4} />
              </button>
              <h1 {...api.getTitleProps()}>TREND Components - Topbar</h1>
            </div>
          </div>
        </header>
      )}
    </Topbar>
    <div className="tc-layout-relative tc-phl" style={style}>
      <p>Lorem ipsum dolor sit amet consectetur adipiscing elit curabitur iaculis, tristique conubia inceptos accumsan feugiat aliquam lectus. Quam pulvinar laoreet orci vestibulum venenatis donec blandit erat, viverra vehicula in elementum mollis lobortis sem metus gravida, vel vitae torquent posuere phasellus ridiculus ac. Ridiculus penatibus tempor aenean suspendisse mattis mi et facilisi sodales vitae inceptos, laoreet elementum libero gravida porta nec lectus fames quis.</p>
      <p>Bibendum blandit et senectus ridiculus litora neque facilisis ut id a, nostra orci placerat praesent donec metus habitant himenaeos pulvinar vestibulum vivamus, eleifend primis consequat varius vulputate fames eros feugiat sollicitudin. Hendrerit blandit auctor parturient inceptos magna vivamus quis, aptent fringilla ad tempor maecenas litora, habitant montes dignissim lectus ante morbi. Libero pellentesque lobortis proin magna est dignissim erat praesent nulla id aptent, dis mollis facilisis hac donec sodales laoreet habitasse bibendum lectus.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipiscing elit curabitur iaculis, tristique conubia inceptos accumsan feugiat aliquam lectus. Quam pulvinar laoreet orci vestibulum venenatis donec blandit erat, viverra vehicula in elementum mollis lobortis sem metus gravida, vel vitae torquent posuere phasellus ridiculus ac. Ridiculus penatibus tempor aenean suspendisse mattis mi et facilisi sodales vitae inceptos, laoreet elementum libero gravida porta nec lectus fames quis.</p>
      <p>Bibendum blandit et senectus ridiculus litora neque facilisis ut id a, nostra orci placerat praesent donec metus habitant himenaeos pulvinar vestibulum vivamus, eleifend primis consequat varius vulputate fames eros feugiat sollicitudin. Hendrerit blandit auctor parturient inceptos magna vivamus quis, aptent fringilla ad tempor maecenas litora, habitant montes dignissim lectus ante morbi. Libero pellentesque lobortis proin magna est dignissim erat praesent nulla id aptent, dis mollis facilisis hac donec sodales laoreet habitasse bibendum lectus.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipiscing elit curabitur iaculis, tristique conubia inceptos accumsan feugiat aliquam lectus. Quam pulvinar laoreet orci vestibulum venenatis donec blandit erat, viverra vehicula in elementum mollis lobortis sem metus gravida, vel vitae torquent posuere phasellus ridiculus ac. Ridiculus penatibus tempor aenean suspendisse mattis mi et facilisi sodales vitae inceptos, laoreet elementum libero gravida porta nec lectus fames quis.</p>
      <p>Bibendum blandit et senectus ridiculus litora neque facilisis ut id a, nostra orci placerat praesent donec metus habitant himenaeos pulvinar vestibulum vivamus, eleifend primis consequat varius vulputate fames eros feugiat sollicitudin. Hendrerit blandit auctor parturient inceptos magna vivamus quis, aptent fringilla ad tempor maecenas litora, habitant montes dignissim lectus ante morbi. Libero pellentesque lobortis proin magna est dignissim erat praesent nulla id aptent, dis mollis facilisis hac donec sodales laoreet habitasse bibendum lectus.</p>
    </div>
  </React.Fragment>;
}

ComponentStory.displayName = 'Component';

export default ComponentStory;
