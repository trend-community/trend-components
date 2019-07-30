import React from 'react';
import { render } from '@testing-library/react';

import Icon, { defaultStyle } from '../Icon';
import getChunks from '../../../../scripts/webpack/getChunks';
import pathResolver from '../../../../scripts/pathResolver';

const icons = [];

(function importIcons(r) {
  const resolver = pathResolver();
  const src = resolver.getAbsPath('packages/tc-icon/src');
  const paths = Object.values(getChunks({
    inputDirectory: src,
    filePathPattern: '[!index|!withIcon|!Icon]*.js'
  }));

  paths.forEach(path => {
    icons.push(require(path));
  });
}());

function stringifyStyles(style = defaultStyle) {
  const camelCaseToDash = str => (
    str.replace(/([A-Z])/g, arr => `-${arr[0].toLowerCase()}`)
  );

  return Object
    .keys(style)
    .reduce((acc, curr) =>
      `${acc} ${camelCaseToDash(curr)}: ${style[curr]};`,
      ''
    )
    .replace(/^[' ']/, '');
}

describe('[tc-icon - Icon]', () => {
  it('should render a generic Icon.', () => {
    const label = 'test';
    const { getByLabelText } = render(<Icon aria-label={label} />);
    const expected = `
      <svg
        aria-label="test"
        height="1em"
        role="img"
        style="${stringifyStyles()}"
        width="1em"
      />
    `;

    expect(getByLabelText(label)).toMatchInlineSnapshot(expected);
  });

  it('should be extensible for custom icons.', () => {
    const label = 'test';
    const as = React.forwardRef((props, ref) => <svg {...props}>
      <title>Custom</title>
      <path />
    </svg>);
    const { getByLabelText, debug } = render(
      <Icon
        as={as}
        aria-label={label} />
    );
    const expected = `
      <svg
        aria-label="test"
        height="1em"
        role="img"
        style="${stringifyStyles()}"
        width="1em"
      >
        <title>
          Custom
        </title>
        <path />
      </svg>
    `;

    expect(getByLabelText(label)).toMatchInlineSnapshot(expected);
  });

  it('should allow the size to be updated.', () => {
    const size = 2;
    const { container, debug } = render(<Icon size={size} />);
    const svg = container.querySelector('svg')
    const width = svg.getAttribute('width');
    const height = svg.getAttribute('height');
    const expected = `${size}em`;

    expect(width).toEqual(expected);
    expect(height).toEqual(expected);
  });

  it('should merge the styles.', () => {
    const style = {
      overflow: 'hidden',
      height: '1.5rem',
      width: '1.5rem'
    };
    const { container, debug } = render(<Icon style={style} />);
    const result = container.querySelector('svg').getAttribute('style');
    const expected = stringifyStyles({ ...defaultStyle, ...style });

    expect(result).toEqual(expected);
  });

  describe('templated icons', () => {
    icons.forEach(Custom => {
      it(`should create a ${Custom}.`, () => {
        const { getByLabelText, getByText } = render(<Custom.default />);
        const name = Custom.default.type.render.displayName;
        const svg = getByLabelText(`icon_${name}`);

        expect(svg.getAttribute('role')).toEqual('img');
        expect(svg.getAttribute('viewBox')).toBeTruthy();
        expect(svg).toContainElement(getByText(name));
        expect(svg.querySelector('path')).toBeTruthy();
      });
    });
  });
});
