import splitProps from '../splitProps';

test('splitProps', () => {
  const props = { foo: 'bar', hello: 'world', fee: 'fi-fo' }
  const result = splitProps(props, ['foo']);

  expect(result).toMatchSnapshot();
});
