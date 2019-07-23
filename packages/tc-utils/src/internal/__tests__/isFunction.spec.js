import isFunction from '../isFunction';

test('isFunction returns `true` for functions.', () => {
  expect(isFunction(jest.fn())).toBeTruthy();
  expect(isFunction(Array.prototype.slice)).toBeTruthy();
});

test('isFunction returns `true` for `Proxy`.', () => {
  expect(isFunction(global.Proxy)).toBeTruthy();
});

test('isFunction returns `true` for async functions.', () => {
  const asyncFunc = Function('return async () => {}');
  expect(isFunction(asyncFunc())).toBeTruthy();
});

test('isFunction returns `true` for generator functions.', () => {
  const generatorFunc = Function('return function*() {}');
  expect(isFunction(generatorFunc())).toBeTruthy();
});

test('isFunction returns `fasle` for non-functions.', () => {
  expect(isFunction(['foo', 'bar'])).toBeFalsy();
  expect(isFunction('foo')).toBeFalsy();
  expect(isFunction(/foo/)).toBeFalsy();
  expect(isFunction(new Date)).toBeFalsy();
  expect(isFunction(new Error)).toBeFalsy();
  expect(isFunction(true)).toBeFalsy();
  expect(isFunction(arguments)).toBeFalsy();
});
