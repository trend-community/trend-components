import React, { Fragment } from 'react';
import Marked from 'storybook-readme/components/Marked';
import {
  array,
  boolean,
  text,
  select
} from '@storybook/addon-knobs/react';

import demo from './demo.md';
import Button from '../src';

function Checkmark({ className, ...rest }) {
  return <svg className={className} {...rest} viewBox="0 0 1024 1024">
    <title>checkmark</title>
    <path className="path"
      d="M864 128l-480 480-224-224-160 160 384 384 640-640z" />
  </svg>;
}

function Story() {
  const accent = boolean('Use accent', false);
  const disabled = boolean('Disabled', false);
  const size = select(
    'Size',
    ['', 'compact']
  );
  const variants = select(
    'Variants',
    ['', 'ctab', 'flat', 'ghost']
  );
  const type = select(
    'Type',
    ['button', 'submit', 'reset'],
    'button'
  );
  const label = text('Label', 'button');
  const withIcon = boolean('With icon', false);

  return <React.Fragment>
    <div
      className="tc-mal tc-flex tc-flex-wrap tc-flex-center tc-flex-middle">
      <Button className="tc-mrl"
        accent={accent}
        disabled={disabled}
        size={size}
        type={type}
        variant={variants}>
          {withIcon ? <Checkmark {...Button.getIconProps()} /> : null}
          {label}
      </Button>
    </div>
    <Marked md={demo} />
  </React.Fragment>
}

Story.displayName = 'Demo';

export default Story;
