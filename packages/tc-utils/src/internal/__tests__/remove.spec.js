import remove from '../remove';

test('remove items from an array', () => {
  expect(remove(['a', 'b', 'c', 'e', 'f'], ['c'])).toMatchInlineSnapshot(`
    Array [
      "a",
      "b",
      "e",
      "f",
    ]
  `);
  expect(remove(['a', 'b', 'c', 'e'], ['a', 'c'])).toMatchInlineSnapshot(`
    Array [
      "b",
      "e",
    ]
  `);
});

test('remove items as functions', () => {
  const foo = () => {};
  const bar = () => {};
  const baz = () => {};

  expect(remove([foo, bar, baz], [baz])).toMatchInlineSnapshot(`
    Array [
      [Function],
      [Function],
    ]
  `);
});
