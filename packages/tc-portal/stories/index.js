import React from 'react';

import Portal from '../src';

export default {
  title: 'Portal',
  component: Portal
};

export const Single = () => (
  <div className="tc-mal">
    <h1>Portal</h1>
    <p>
      Abstract component that wraps a Reacts Portal component.  Supports nested and sibling portals.
    </p>

    <div className="tc-pal tc-border tc-border-concrete-100">
      Portal declared here but rendered out of the main document flow.
      <Portal className="tc-phl tc-mal tc-border">
        <h1 className="tc-type-h3">Portal</h1>
        <p>Portal content...</p>
      </Portal>
    </div>
  </div>
);

export const Nested = () => (
  <div className="tc-mal">
    <h1>Nested Portal</h1>
    <p>An example of a nested portal.</p>
    <Portal className="tc-pal tc-mal tc-border">
      <h1 className="tc-type-h5">Portal</h1>
      <Portal className="tc-pam tc-border">Nested portal...</Portal>
    </Portal>
  </div>
);

export const Sibling = () => (
  <div className="tc-mal">
    <h1>Sibling Portals</h1>
    <p>An example of sibling portals.</p>
    <Portal className="tc-pal tc-mal tc-border">
      <h1 className="tc-type-h5">Portal 1</h1>
    </Portal>
    <Portal className="tc-pal tc-mal tc-border">
      <h1 className="tc-type-h5">Portal 2</h1>
    </Portal>
  </div>
);
