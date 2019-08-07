import isBoolean from '../isBoolean';

test('isBoolean', () => {
  expect(isBoolean(true)).toBe(true);
  expect(isBoolean(false)).toBe(true);
  expect(isBoolean(!!'true')).toBe(true);
  expect(isBoolean(Boolean('foo'))).toBe(true);

  expect(isBoolean(/foo/)).toBe(false);
  expect(isBoolean('false')).toBe(false);
  expect(isBoolean('true')).toBe(false);
  expect(isBoolean([true])).toBe(false);
  expect(isBoolean(() => false)).toBe(false);
  expect(isBoolean({ foo: true })).toBe(false);
});
