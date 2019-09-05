import isString from '../isString';

test('isString', () => {
  expect(isString('foo')).toEqual(true);
  expect(isString('i am a string')).toEqual(true);
  expect(isString(false)).toEqual(false);
  expect(isString({})).toEqual(false);
  expect(isString([])).toEqual(false);
  expect(isString(() => {})).toEqual(false);
  expect(isString(new String('foo'))).toEqual(false);
});
