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

  // Grab the viewBox before we overwrite the openingElement below.
  const viewBox = jsx.openingElement.attributes.find(element => {
    return element.name.name === 'viewBox';
  });

  // Reset to a fragment so we can pass in as children.
  jsx.openingElement = t.jsxOpeningFragment();
  jsx.closingElement = t.jsxClosingFragment();

  const titleElement = t.jsxElement(
    t.jsxOpeningElement(t.jsxIdentifier('title'), []),
    t.jsxClosingElement(t.jsxIdentifier('title')),
    [t.jsxText(`${name}`)],
  )

  jsx.children = [titleElement, ...jsx.children];

  const useHook = `use${name}`;
  const useName = `${name}`;
  const label = `icon_${name}`;

  return template.ast`
    ${imports}
    import createComponent from '@trend/utils/createComponent';
    import createUseHook from '@trend/utils/createUseHook';
    import useCreateElement from '@trend/utils/hooks/useCreateElement';
    import { useIcon } from './Icon';

    export const ${useHook} = createUseHook({
      name: '${useName}',
      compose: useIcon,
      useProps: (options, htmlProps) => ({
        'aria-label': '${label}',
        viewBox: '${viewBox.value.value}',
        ...htmlProps,
        children: useCreateElement(null, null, () => ${jsx})
      })
    });

    const ${name} = createComponent({
      as: 'svg',
      useHook: ${useHook}
    });

    export default ${name};
  `;
}

module.exports = template;
