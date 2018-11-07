/**
 * SVG template to use pass as a config to svgr cli tool.
 * Example: npm @svgr/cli --template path/to/this/template --out-dir ./output/directory path/to/icons(s)
 */

function template(
  { template, types: t },
  opts,
  { imports, componentName, props, jsx, exports },
) {
  const name = componentName.name.replace('Svg', '');

  jsx
    .openingElement
    .attributes = [
      t.jsxAttribute(
        t.jsxIdentifier('aria-labelledby'),
        t.stringLiteral(`icon_${name}`)
      ),
      ...jsx.openingElement.attributes
    ];

  const idAttribute = t.jsxAttribute(
    t.jsxIdentifier('id'),
    t.stringLiteral(`icon_${name}`)
  );

  const titleElement = t.jsxElement(
    t.jsxOpeningElement(t.jsxIdentifier('title'), [idAttribute]),
    t.jsxClosingElement(t.jsxIdentifier('title')),
    [t.jsxText(`${name}`)],
  )

  jsx.children = [titleElement, ...jsx.children];

  return template.ast`
    ${imports}
    import withIcon from './src';
    const ${name} = (${props}) => ${jsx}
    export default withIcon(${name});
  `
}

module.exports = template;
