import React from 'react';
import Markdown from 'react-markdown';

import readme from 'packages/tc-helpers/README.md';

function HelpersPage() {
  return <div className="tc-phl">
    <Markdown source={readme} />
  </div>;
}

HelpersPage.displayName = 'HelpersPage';

export default HelpersPage;
