import not from '../not';
import isFunction from '../isFunction';

test('returns a function.', () => {
  expect(isFunction(not(() => true))).toBeTruthy();
});

test('throws if argument is not a function.', () => {
  ['foo', true, /foo/, [], {}].forEach(item => {
    expect(() => not(item)).toThrow();
  });
});

test('properly negates a predicate.', () => {
  const isFalse = not(() => true);
  const isTrue = not(() => false);

  expect(isFalse()).toBeFalsy();
  expect(isTrue()).toBeTruthy();
});
