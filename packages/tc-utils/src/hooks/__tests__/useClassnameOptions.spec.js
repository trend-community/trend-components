import useClassnameOptions from '../useClassnameOptions';

describe('[utils - hooks/useClassnameOptions]', () => {
  it('should set the appropriate key.', () => {
    expect(useClassnameOptions.optionProps).toContain('classnameOptions');
  });
});
