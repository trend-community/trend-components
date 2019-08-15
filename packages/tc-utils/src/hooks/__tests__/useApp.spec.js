import useApp from '../useApp';

describe('[utils - hooks/useApp]', () => {
  it('should store "app" namespace in keys.', () => {
    expect(useApp.optionProps).toContain('app');
  });
});
