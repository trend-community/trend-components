import deepEqual from '../deepEqual';

test('deepEqual - shallow', () => {
  expect(deepEqual([1, 3], [1, 3])).toBeTruthy();
  expect(deepEqual({ a: 1, b: 2 }, { a: 1, b: 2 })).toBeTruthy();
  expect(deepEqual(undefined, undefined)).toBeTruthy();

  expect(deepEqual({ foo: 'baz' }, { foo: 'bar' })).toBeFalsy();
  expect(deepEqual([], { foo: 'bar' })).toBeFalsy();
});

test('deepEqual - deep', () => {
  expect(
    deepEqual(
      { a: { c: 1, d: 2, e: [1, 2, 3] } },
      { a: { c: 1, d: 2, e: [1, 2, 3] } },
      2
    )
  ).toBeTruthy();

 expect(
   deepEqual(
     { a: { c: 1, d: 2, e: [1, 2, 3] } },
     { a: { c: 1, d: 2, e: [1, 2, 3, 4] } },
     2
    )
  ).toBeFalsy();

  expect(
    deepEqual({ a: 1, b: 'b' }, { a: 1, c: 'c' })
  ).toBeFalsy();
});
