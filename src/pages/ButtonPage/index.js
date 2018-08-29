import React, { Fragment, PureComponent } from 'react';

import { Checkmark } from 'components/Icons';
import Button from 'components/Button';
import Markdown from 'components/Markdown';
import md from 'packages/tc-button/README.md';

const installationIdx = md.indexOf('## Installation')
const intro = md.slice(0, installationIdx - 1);
const installation = md.slice(installationIdx);

class ButtonPage extends PureComponent {
  render() {
    return <div className="tc-mal">
      <Markdown source={intro} />
      <div className="tc-mal tc-flex tc-flex-center tc-flex-middle">
        <Button className="tc-mrl">button</Button>
        <Button className="tc-mrl" modifiers="accent">accent</Button>
        <Button className="tc-mrl">
          {({ getButtonIconProps }) =>
            <Fragment>
              <Checkmark {...getButtonIconProps()} />
              icon
            </Fragment>
          }
        </Button>
        <Button className="tc-mrl" modifiers="compact">
          compact
        </Button>
        <Button disabled={true}>disabled</Button>
      </div>

      <div className="tc-mal tc-flex tc-flex-center tc-flex-middle">
        <Button className="tc-mrl" modifiers="ghost">button</Button>
        <Button className="tc-mrl" modifiers="accent ghost">accent</Button>
        <Button className="tc-mrl" modifiers="ghost">
          <Checkmark className="tc-Button-icon" />
          icon
        </Button>
        <Button className="tc-mrl" modifiers="compact ghost">compact</Button>
        <Button modifiers="ghost" disabled>disabled</Button>
      </div>

      <div className="tc-mal tc-flex tc-flex-center tc-flex-middle">
        <Button className="tc-mrl" modifiers="ctab">button</Button>
        <Button className="tc-mrl" modifiers="accent ctab">accent</Button>
        <Button className="tc-mrl" modifiers="ctab">
          <Checkmark className="tc-Button-icon" />
          icon
        </Button>
        <Button className="tc-mrl" modifiers="ctab compact">compact</Button>
        <Button modifiers="ctab" disabled>disabled</Button>
      </div>

      <div className="tc-mal tc-flex tc-flex-center tc-flex-middle">
        <Button className="tc-mrl" modifiers="flat">button</Button>
        <Button className="tc-mrl" modifiers="accent flat">accent</Button>
        <Button className="tc-mrl" modifiers="flat">
          <Checkmark className="tc-Button-icon" />
          icon
        </Button>
        <Button className="tc-mrl" modifiers="compact flat">compact</Button>
        <Button modifiers="tc-Button--flat" disabled>disabled</Button>
      </div>
      <Markdown source={installation} />
    </div>;
  }
}

export default ButtonPage;
