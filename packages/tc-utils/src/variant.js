/**
 * Utilities for working with variant (aka modifier) className selectors.
 */

/**
 * Pull out the suffix of variant (aka modifier) class selector.
 *
 * @param {string} variant - The className selector.
 * @returns {string} - The suffix of the variant class selector.
 * @example
 *   getVariantName('ClassComponent--variant');
 *   //- 'variant'
 */

function getVariantName(variant) {
  return variant.replace(/^.*--/, '');
}

/**
 * Check for existence of specific variant className selectors in a string.
 * Usefull when a component accepts a `variant` prop that will add a variant
 * className depending on the existence of that name in the prop.
 *
 * @param {object} obj - Takes one argument which must be an object.
 * @param {string} obj.variants - The variant prop.
 * @param {string} obj[*] - Classname variant.
 * @returns {object} -  An object whose keys are the variant classNames that
 * are assigned `true` if name exists in `variants` key else `false`.
 *
 * @example
 *   const variants = 'foo';
 *   const classes = { foo: 'Component--foo', bar: 'Component--bar' };
 *   checkForVariants({ variants, ...classes });
 *   //- { 'Component-foo': true, 'Component--bar': false }
 */

function checkForVariants({ variants = '', ...classNameVariants }) {
  const classNames = Object.keys(classNameVariants);

  return classNames.length
    ? classNames
      .reduce((acc, curr) => ({
        ...acc,
        [classNameVariants[curr]]: variants.indexOf(getVariantName(curr)) > -1
      }), {})
    : {};
}

/**
 * Does a simple substring match on a single variant.
 *
 * @param {string} variant - The variant to check against.
 * @param {string} value - The substring to dectect in the variant.
 * @returns {boolean} - True if value is a substring of variant, otherwise
 * false.
 *
 * @example
 * checkForVariant('tc-component--variant', 'variant');
 * // true
 * checkForVariant('tc-component', 'component')
 * // false
 * checkForVariant('tc-component-foo', 'bar')
 * // false
 */

function checkForVariant(variant, value) {
  return getVariantName(variant) === value;
}

export { checkForVariant, checkForVariants, getVariantName };
