import React from 'react';
import {
  number,
  select,
  text
} from '@storybook/addon-knobs/react';

const icons = [];

function importIcons(r) {
  r.keys().forEach(key => icons.push(r(key).default));
}

importIcons(require.context('../src', false, /^((?!index|withIcon).)*\.js$/));

const label = 'Size';
const defaultValue = 2;
const options = {
   range: true,
   min: 1,
   max: 10,
   step: 1,
};

function Story() {
  const size = number(label, defaultValue, options);
  const unit = select('Unit', ['rem', 'em'], 'rem');
  const color = text('Color', 'rgba(51, 51, 51, 0.87)');

  const style = {
    color
  };

  const iconStyle = {
    display: 'inline-block',
    border: '1px solid #ddd',
    padding: '0.5rem 0.75rem'
  }

  function formatName(name) {
    return name.replace(/^WithIcon\(/, '').replace(/\)$/, '');
  }

  return <div className="tc-mal tc-flex tc-flex-wrap" style={style}>
    {icons.map((Icon, idx) => (
      <div className="tc-mam tc-text-center" key={`icon-${idx}`}>
        <div style={iconStyle}>
          <Icon size={size} unit={unit} />
        </div>
        <p>{formatName(Icon.displayName)}</p>
      </div>
    ))}
  </div>
}

Story.displayName = 'Icons';

export default Story;
