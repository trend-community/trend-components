import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {
  atelierCaveLight as style
} from 'react-syntax-highlighter/styles/hljs';

const propTypes = {
  language: PropTypes.string,
  value: PropTypes.string
};

function Code({ language, value }) {
  return <SyntaxHighlighter
    language={language}
    style={style}>
      {value}
  </SyntaxHighlighter>;
}

Code.propTypes = propTypes;
Code.displayName = 'Code';

export default Code;
