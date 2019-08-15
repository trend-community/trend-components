import React from 'react';
import { action } from '@storybook/addon-actions';
import Marked from 'storybook-readme/components/Marked';

import Disclosure, { DisclosureButton, useDisclosureState } from '../src';
import basic from './basic.md';
import renderProps from './renderProps.md';

function ComponentStory({ as }) {
  const disclosure = useDisclosureState();
  const conditionalDisclosure = useDisclosureState({ visible: true });

  return (
    <React.Fragment>
      <div className="tc-mhl">
        <h2>Disclosure</h2>
        <p>Implements the WAI-ARIA Disclosure Pattern.</p>
      </div>
      <section className="tc-mhl">
        <h3>Basic Usage</h3>
        <div>
          <DisclosureButton variant="ctab" {...disclosure}>
            Disclosure Button
          </DisclosureButton>
          <Disclosure as={as} {...disclosure}>
            Disclosure Component
          </Disclosure>
        </div>
      </section>
      <Marked md={basic} />
      <section className="tc-mhl">
        <h3>Render props</h3>
        <div>
          <DisclosureButton {...conditionalDisclosure}>Toggle</DisclosureButton>
          <Disclosure {...conditionalDisclosure}>
            {props =>
              conditionalDisclosure.visible && (
                <div {...props}>Disclosure component</div>
              )
            }
          </Disclosure>
        </div>
      </section>
      <Marked md={renderProps} />
    </React.Fragment>
  );
}

ComponentStory.displayName = 'Component';

export default ComponentStory;
