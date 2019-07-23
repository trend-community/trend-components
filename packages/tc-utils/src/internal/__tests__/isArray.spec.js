import toArray from '../toArray';

test('toArray', () => {
  expect(toArray('foo')).toEqual(['foo']);
  expect(toArray('bar')).toEqual(['bar']);
});
