import reduceObjects from '../reduceObjects';

test('reduceObjects', () => {
  expect(reduceObjects([{ foo: 'bar' }, { foo: 'baz', bar: 'baz' }]))
    .toEqual({ foo: ['bar', 'baz'], bar: ['baz'] });

  expect(
    reduceObjects(
      [{ foo: 'bar' }, { foo: 'baz' }],
      (val, key) => key === 'foo' && val === 'bar'
    )
  )
    .toEqual({
        foo: ['bar']
    });
});
