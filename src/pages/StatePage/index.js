import React from 'react';

import Markdown from 'components/Markdown';
import readme from 'packages/tc-state/README.md';

function StatePage() {
  return <div className="tc-mal">
    <Markdown source={readme} />
  </div>;
}

StatePage.displayName = 'StatePage';

export default StatePage;
