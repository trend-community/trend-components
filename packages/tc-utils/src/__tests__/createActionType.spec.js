import createActionType from '../createActionType';

describe('[utils - createActionType]', () => {
  const TYPE = createActionType('module', 'TEST');

  it('should return a value that begins with "applaudit."', () => {
    expect(/^@trend/.test(TYPE)).toBeTruthy();
  });

  it('should append module and type arguments correctly.', () => {
    expect(/(module\/TEST)$/.test(TYPE)).toBeTruthy();
  });

  it('should throw error if arguments are not strings.', () => {
    const fn1 = () => createActionType(0, 'TEST');
    const fn2 = () => createActionType('module', 0);
    const fn3 = () => createActionType(0, 0);
    expect(fn1).toThrow();
    expect(fn2).toThrow();
    expect(fn3).toThrow();
  });
});
