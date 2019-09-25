import isObject from '../internal/isObject';
import { checkForVariant, checkForVariants, getVariantName } from '../variant';

describe('[utils - variants]', () => {
  describe('getVariantName', () => {
    it('should just return the variant suffix.', () => {
      const suffix = 'foo';
      const variant = `Component--${suffix}`;
      expect(getVariantName(variant)).toEqual(suffix);
    });

    it('should return `variant` when not name corretly.', () => {
      const variant = 'Component';
      expect(getVariantName(variant)).toEqual(variant);
    });
  });

  describe('checkForVariants', () => {
    it('should always return an object.', () => {
      expect(isObject(checkForVariants({}))).toBeTruthy();
      expect(isObject(checkForVariants({ variants: 'foo bar' }))).toBeTruthy();
    });

    it('should return an object is the correct format.', () => {
      const variants = 'foo';
      const classes = {
        foo: 'Componet--foo',
        bar: 'Component--bar'
      };
      const result = checkForVariants({
        variants,
        ...classes
      });
      const expected = {
        [classes.foo]: true,
        [classes.bar]: false
      };

      expect(result).toEqual(expected);
    });
  });

  describe('checkForVariant', () => {
    it('should detect if variant exists in a className modifier.', () => {
      expect(checkForVariant('tc-component--variant', 'variant')).toBeTruthy();
      expect(checkForVariant('tc-component--foo', 'foo')).toBeTruthy();
      expect(checkForVariant('tc-component--foo', 'bar')).toBeFalsy();
      expect(checkForVariant('tc-component', 'component')).toBeFalsy();
    });
  });
});
