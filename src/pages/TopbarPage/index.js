import React from 'react';

import Markdown from 'components/Markdown';
import readme from 'packages/tc-topbar/README.md';

function TopbarPage() {
  return <div className="tc-mal">
    <Markdown source={readme} />
  </div>;
}

TopbarPage.displayName = 'TopbarPage';

export default TopbarPage;
