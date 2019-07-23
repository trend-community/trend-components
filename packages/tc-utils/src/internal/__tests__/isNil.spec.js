import isNil from '../isNil';

test('returns `true` for `null` or `undefined` values.', () => {
  expect(isNil(null)).toBeTruthy();
  expect(isNil(undefined)).toBeTruthy();
  expect(isNil()).toBeTruthy();
});

test('returns `false` for values that are not `null` or `undefiend`.', () => {
  [
    [],
    {},
    100,
    'foo',
    /foo/,
    true,
    false,
    () => {},
    new Date,
    new Error
  ].forEach(item => {
    expect(isNil(item)).toBeFalsy();
  });
});
