import React, { Fragment } from 'react';
import Markdown from 'react-markdown';

import { Checkmark } from 'components/Icons';
import Code from 'components/Code';
import example1 from './example-1.md';
import example2 from './example-2.md';
import example3 from './example-3.md';
import example4 from './example-4.md';

function ButtonPage() {
  return <Fragment>
    <p className="tc-mal">TREND components button patterns.</p>

    <div className="tc-mal tc-flex tc-flex-center tc-flex-middle">
      <button className="tc-Button tc-mrl" type="button"> button</button>
      <button className="tc-Button tc-Button--accent tc-mrl" type="button">
        accent</button>
      <button className="tc-Button tc-mrl" type="button">
        <Checkmark className="tc-Button-icon" />
        icon
      </button>
      <button className="tc-Button tc-Button--compact tc-mrl" type="button">
        compact
      </button>
      <button className="tc-Button" disabled type="button">disabled</button>
    </div>

    <Code><Markdown source={example1} /></Code>

    <div className="tc-mal tc-flex tc-flex-center tc-flex-middle">
      <button className="tc-Button tc-Button--ghost tc-mrl" type="button">
        button
      </button>
      <button className="tc-Button tc-Button--accent tc-Button--ghost tc-mrl"
        type="button">
        accent
      </button>
      <button className="tc-Button tc-Button--ghost tc-mrl" type="button">
        <Checkmark className="tc-Button-icon" />
        icon
      </button>
      <button className="tc-Button tc-Button--compact tc-Button--ghost tc-mrl"
        type="button">
        compact
      </button>
      <button className="tc-Button tc-Button--ghost"
        disabled
        type="button">
        disabled
      </button>
    </div>

    <Code><Markdown source={example2} /></Code>

    <div className="tc-mal tc-flex tc-flex-center tc-flex-middle">
      <button className="tc-Button tc-Button--ctab tc-mrl" type="button">
        button
      </button>
      <button className="tc-Button tc-Button--accent tc-Button--ctab tc-mrl"
        type="button">
        accent
      </button>
      <button className="tc-Button tc-Button--ctab tc-mrl" type="button">
        <Checkmark className="tc-Button-icon" />
        icon
      </button>
      <button className="tc-Button tc-Button--compact tc-Button--ctab tc-mrl"
        type="button">
        compact
      </button>
      <button className="tc-Button tc-Button--ctab"
        disabled
        type="button">
        disabled
      </button>
    </div>

    <Code><Markdown source={example3} /></Code>

    <div className="tc-mal tc-flex tc-flex-center tc-flex-middle">
      <button className="tc-Button tc-Button--flat tc-mrl" type="button">
        button
      </button>
      <button className="tc-Button tc-Button--accent tc-Button--flat tc-mrl"
        type="button">
        accent
      </button>
      <button className="tc-Button tc-Button--flat tc-mrl" type="button">
        <Checkmark className="tc-Button-icon" />
        icon
      </button>
      <button className="tc-Button tc-Button--compact tc-Button--flat tc-mrl"
        type="button">
        compact
      </button>
      <button className="tc-Button tc-Button--flat"
        disabled
        type="button">
        disabled
      </button>
    </div>

    <Code><Markdown source={example4} /></Code>
  </Fragment>;
}

ButtonPage.displayName = 'ButtonPage';

export default ButtonPage;
