import isObject from '../isObject';

test('isObject', () => {
  [{}, Object.create({}), () => {}, []].forEach(
     v => expect(isObject(v)).toBeTruthy()
  );

  [1, true, false].forEach(
     v => expect(isObject(v)).toBeFalsy()
  );
});
