import React, { Fragment, PureComponent } from 'react';

import Code from 'components/Code';
import Markdown from 'components/Markdown';
import examples from './examples.md';
console.log(examples);

const styles = {
  border: '1px solid #efefef',
  padding: '1.5rem',
  backgroundColor: '#efefef'
};

const headers = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

function Header({ children, elem }) {
  return React.createElement(elem, {}, children);
}

class TypePage extends PureComponent {
  render() {
    return <Fragment>
      <p>Apply consistent typographic styling to project.</p>
      <div style={styles}>
        { headers.map(header => {
            return <Header elem={header} key={headers.indexOf(header)}>
              Header {headers.indexOf(header) + 1}
            </Header>;
          })
        }
        <p>
          <strong>Paragraph</strong>.  Lorem ipsum dolor sit amet consectetur adipiscing, elit felis auctor cras tempus ligula, est gravida mi bibendum fermentum. Suspendisse erat turpis volutpat molestie et dignissim interdum, eu hac sagittis ultrices vitae vestibulum ligula placerat, blandit tempor arcu orci mi pellentesque. Aliquam nisi hac aliquet posuere ullamcorper proin quam nunc quisque, lobortis facilisi dapibus nibh iaculis semper nam vestibulum, scelerisque montes facilisis pretium cubilia cursus turpis risus.
        </p>
      </div>

      <div style={styles}>
        <h1>Helpers</h1>
        <p>
          Adjust typographic appearance of any HTML element with <code>
          tc-type</code> helper class.
        </p>
        <Markdown source={examples} />
        <p className="tc-type-subtitle1">Example subtitle1 text.</p>
        <p className="tc-type-subtitle2">Example subtitle2 text.</p>
        <p className="tc-type-caption">Example caption text.</p>

        <p className="tc-type-body1">
          <strong>Example body1 text</strong>.  Lorem ipsum dolor sit amet consectetur adipiscing, elit felis auctor cras tempus ligula, est gravida mi bibendum fermentum. Suspendisse erat turpis volutpat molestie et dignissim interdum, eu hac sagittis ultrices vitae vestibulum ligula placerat, blandit tempor arcu orci mi pellentesque. Aliquam nisi hac aliquet posuere ullamcorper proin quam nunc quisque, lobortis facilisi dapibus nibh iaculis semper nam vestibulum, scelerisque montes facilisis pretium cubilia cursus turpis risus.
        </p>
        <p className="tc-type-body2">
          <strong>Example body2 text</strong>.  Lorem ipsum dolor sit amet consectetur adipiscing, elit felis auctor cras tempus ligula, est gravida mi bibendum fermentum. Suspendisse erat turpis volutpat molestie et dignissim interdum, eu hac sagittis ultrices vitae vestibulum ligula placerat, blandit tempor arcu orci mi pellentesque. Aliquam nisi hac aliquet posuere ullamcorper proin quam nunc quisque, lobortis facilisi dapibus nibh iaculis semper nam vestibulum, scelerisque montes facilisis pretium cubilia cursus turpis risus.
        </p>
      </div>
    </Fragment>;
  }
}

TypePage.displayName = 'TypePage';

export default TypePage;
