import React from 'react';

const icons = [];

function importIcons(r) {
  r.keys().forEach(key => icons.push(r(key).default));
}

importIcons(
  require.context('../src', false, /^((?!index|withIcon|Icon).)*\.js$/)
);

function Story({ size, style, unit }) {
  const iconStyle = {
    display: 'inline-block',
    border: '1px solid #ddd',
    padding: '0.5rem 0.75rem'
  }

  return <div className="tc-mal tc-flex tc-flex-wrap" style={style}>
    {icons.map((Icon, idx) => (
      <div className="tc-mam tc-text-center" key={`icon-${idx}`}>
        <div style={iconStyle}>
          <Icon size={size} unit={unit} />
        </div>
        <p>{`${icons[idx].type.render.displayName}`}</p>
      </div>
    ))}
  </div>
}

Story.displayName = 'Icons';

export default Story;
