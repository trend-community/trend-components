import createReducer from '../createReducer';

describe('[utils - createReducer]', () => {
  it('should return a function.', () => {
    expect(typeof createReducer({}, {})).toEqual('function');
  });

  it('should return a function that accepts state and action object.', () => {
    const reducer = createReducer(
      {},
      {
        foo: function bar(fooState, action) {}
      }
    );

    expect(reducer({}, { type: 'foo' })).toMatchInlineSnapshot(`undefined`);
  });
});
