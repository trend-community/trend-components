import warning from '../warning';

describe('[tc-utils/warning]', () => {
  beforeEach(() => {
    jest.spyOn(console, 'warn').mockImplementation(() => {});
  });

  afterEach(() => {
    console.warn.mockRestore();
  });

  it('should not log a warning if the condition is falsy.', () => {
    const values = [undefined, null, false, +0, -0, NaN, ''];

    values.forEach(value => {
      warning(value, 'message');
      expect(console.warn).not.toHaveBeenCalled();
    });
  });

  it('should log a warning if the condition is truthy.', () => {
    const values = [1, -1, true, {}, [], Symbol(), 'foo'];

    values.forEach(value => {
      const message = `hey ${String(value)}`;
      warning(value, message);

      expect(console.warn)
        .toHaveBeenCalledWith(`[trend-components]\n${message}`);
      console.warn.mockClear();
    });
  });
});
