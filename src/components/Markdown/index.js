import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

import Code from 'components/Code';

const propTypes = {
  source: PropTypes.string.isRequired
};

function Markdown({ source }) {
  return <ReactMarkdown source={source} renderers={{ code: Code }} />;
}

Markdown.propTypes = propTypes;
Markdown.displayName = 'Markdown';

export default Markdown;
