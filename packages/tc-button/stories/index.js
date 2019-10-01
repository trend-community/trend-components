import React from 'react';
import {
  storiesOf
} from '@storybook/react';
import { withReadme, doc } from 'storybook-readme';
import { withKnobs } from '@storybook/addon-knobs'
import {
  array,
  boolean,
  text,
  select
} from '@storybook/addon-knobs/react';
import Marked from 'storybook-readme/components/Marked';

import readme from '../README.md';
import scssReadme from '../scss/README.md';
import Button from '../src';

import demo from './demo.md';

export function Checkmark({ className, withIcon, ...rest }) {
  return withIcon
    ? <svg className={className} {...rest} viewBox="0 0 1024 1024">
        <title>checkmark</title>
        <path className="path"
          d="M864 128l-480 480-224-224-160 160 384 384 640-640z" />
      </svg>
    : false;
}

export default {
  title: 'Button',
  component: Button,
  excludeStories: ['Checkmark'],
  decorators: [withReadme(readme)]
};

export const scss = () => <div></div>;

scss.story = {
  decorators: [doc(scssReadme)]
};

export const base = () => {
  const size = select('Size', ['', 'compact'], '');
  return <>
    <div
      className="tc-mal tc-flex tc-flex-wrap tc-flex-center tc-flex-middle">
      <Button
        accent={boolean('Use accent', false)}
        disabled={boolean('Disabled', false)}
        size={size.length ? size : undefined}
        variant={select('Variants', ['', 'ctab', 'flat', 'ghost'])}>
        <Checkmark
          {...Button.getIconProps()}
          withIcon={boolean('With icon', false)} />
        {text('Label', 'button')}
      </Button>
    </div>
    <Marked md={demo} />
  </>;
};

base.story = {
  decorators: [
    withKnobs,
  ]
};

// export const accent = () => <Button accent>Default</Button>;

// storiesOf('Button', module)
//   .addDecorator(withKnobs)
//   .add('scss', doc(scssReadme))
//   .add(Demo.displayName, withReadme(readme, () => {
//     const accent = boolean('Use accent', false);
//     const disabled = boolean('Disabled', false);
//     const size = select(
//       'Size',
//       ['', 'compact'],
//       ''
//     );
//     const variants = select(
//       'Variants',
//       ['', 'ctab', 'flat', 'ghost']
//     );
//     const type = select(
//       'Type',
//       ['button', 'submit', 'reset'],
//       'button'
//     );
//     const label = text('Label', 'button');
//     const withIcon = boolean('With icon', false);
//
//     return <Demo
//       accent={accent}
//       disabled={disabled}
//       label={label}
//       size={size.length ? size : undefined}
//       type={type}
//       variants={variants}
//       withIcon={withIcon} />;
//    }));
