import has from '../has';

test('has', () => {
  const obj = { foo: 'bar', hello: 'world' };

  expect(has(obj, 'foo')).toBeTruthy();
  expect(has(obj, 'hello')).toBeTruthy();
  expect(has(Object.create(obj), 'foo')).toBeFalsy();
});
