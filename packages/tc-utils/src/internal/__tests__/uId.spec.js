import uId from '../uId';

test('uId returns a string', () => {
  expect(typeof uId()).toEqual('string');
});

test('uId returns string with a prefix.', () => {
  const result = uId('test');
  expect(/test\d+/.test(result)).toBeTruthy();
});

test('uId generates uniquie ids.', () => {
  const n = 100;
  const expected = Array.apply(null, { length: n }).map(uId);
  const result = expected.filter(
    (item, idx) => expected.indexOf(item) == idx);

  expect(result.length).toEqual(expected.length);
});
