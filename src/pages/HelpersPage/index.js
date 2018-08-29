import React from 'react';

import Markdown from 'components/Markdown';
import readme from 'packages/tc-helpers/README.md';

function HelpersPage() {
  return <div className="tc-mal">
    <Markdown source={readme} />
  </div>;
}

HelpersPage.displayName = 'HelpersPage';

export default HelpersPage;
