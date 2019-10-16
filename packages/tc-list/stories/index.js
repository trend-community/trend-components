import React from 'react';
import {
  storiesOf
} from '@storybook/react';
import { withReadme, doc } from 'storybook-readme';
import { withKnobs } from '@storybook/addon-knobs';
import {
  boolean,
} from '@storybook/addon-knobs/react';

import readme from '../README.md';
import scssReadme from '../scss/README.md';

import {
  Standard,
  StandardWithDisabled,
  ExtendListItem,
  LeadingIcon,
  Meta,
  Avatar,
  MediaAndMeta,
  ListDividers
} from './component.story';
import List, { useListState, ListItem } from '../src';
import '../styles.scss';

export default {
  title: 'List',
  decorators: [
    withReadme(readme)
  ]
};

export const scss = () => <div></div>;
scss.story = {
  decorators: [doc(scssReadme)]
};

export const SingleLine = () => {
  const [rtl, setRtl] = React.useState(false);

  return <div className="tc-mal">
    <div className="tc-flex tc-flex-between tc-mvb">
      <span className="tc-type-subtitle1">Single line</span>
      <button onClick={() => setRtl(!rtl)} type="button">RTL</button>
    </div>
    <Standard rtl={rtl ? 'rtl' : undefined} />


    <div className="tc-type-subtitle1 tc-mvb">
      Single line with disabled item
    </div>
    <StandardWithDisabled />
  </div>
};

export const ExtendItems = () => {
  const [rtl, setRtl] = React.useState(false);

  return <div className="tc-mal">
    <div className="tc-flex tc-flex-between tc-mvb">
      <span className="tc-type-subtitle1">Extend list items</span>
      <button onClick={() => setRtl(!rtl)} type="button">RTL</button>
    </div>
    <ExtendListItem rtl={rtl ? 'rtl' : undefined} />
  </div>;
};

export const Icons = () => (
  <div className="tc-mal">
    <h3 className="tc-type-subtitle1 tc-mvb">
      Lists with leading (media) icons
    </h3>
    <LeadingIcon />

    <h3 className="tc-type-subtitle1 tc-mvb">
      Lists with trailing (meta) icons
    </h3>
    <Meta />

    <h3 className="tc-type-subtitle1 tc-mvb">
      Lists with avatars
    </h3>
    <Avatar />

    <h3 className="tc-type-subtitle1 tc-mvb">
      List with media and meta icons
    </h3>
    <MediaAndMeta />
  </div>
);

export const Dividers = () => (
  <div className="tc-mal">
    <h3 className="tc-type-subtitle1 tc-mvb">List with dividers</h3>
    <ListDividers />

    <h3 className="tc-type-subtitle1 tc-mvb">List with indented dividers</h3>
    <ListDividers indent />
  </div>
);
