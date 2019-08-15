import setOptions from '../setOptions';

test('setOptions', () => {
  const func = () => {};
  const arr = ['foo', 'bar'];
  const result = setOptions(func, arr).optionProps;
  const expected = func.optionProps;
  expect(result).toEqual(expected);
});

test('setOptions to throw when `arr` is not an array.', () => {
  expect(() => setOptions({}, 'foo')).toThrow();
});
