import React from 'react';

import Markdown from 'components/Markdown';
import readme from 'packages/tc-type/README.md';

function TypePage() {
  return <div className="tc-mal">
    <Markdown source={readme} />

    <p className="tc-type-subtitle1">
      Example <strong>subtitle1</strong> text.
    </p>
    <p className="tc-type-subtitle2">
      Example <strong>subtitle2</strong> text.
    </p>
    <p className="tc-type-caption">Example <strong>caption</strong> text.</p>

    <p className="tc-type-body1">
      <strong>Example body1 text</strong>.  Lorem ipsum dolor sit amet consectetur adipiscing, elit felis auctor cras tempus ligula, est gravida mi bibendum fermentum. Suspendisse erat turpis volutpat molestie et dignissim interdum, eu hac sagittis ultrices vitae vestibulum ligula placerat, blandit tempor arcu orci mi pellentesque. Aliquam nisi hac aliquet posuere ullamcorper proin quam nunc quisque, lobortis facilisi dapibus nibh iaculis semper nam vestibulum, scelerisque montes facilisis pretium cubilia cursus turpis risus.
    </p>
    <p className="tc-type-body2">
      <strong>Example body2 text</strong>.  Lorem ipsum dolor sit amet consectetur adipiscing, elit felis auctor cras tempus ligula, est gravida mi bibendum fermentum. Suspendisse erat turpis volutpat molestie et dignissim interdum, eu hac sagittis ultrices vitae vestibulum ligula placerat, blandit tempor arcu orci mi pellentesque. Aliquam nisi hac aliquet posuere ullamcorper proin quam nunc quisque, lobortis facilisi dapibus nibh iaculis semper nam vestibulum, scelerisque montes facilisis pretium cubilia cursus turpis risus.
    </p>
  </div>;
}

TypePage.displayName = 'TypePage';

export default TypePage;
