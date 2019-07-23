import isEnv, { isNotEnv } from '../env';

test('isEnv returns a boolean.', () => {
  expect(isEnv('production')).toEqual(false);
  expect(isEnv('test')).toEqual(true);
});

test('isNotEnv negates results.', () => {
  expect(isNotEnv('test')).toBeFalsy();
  expect(isNotEnv('production')).toBeTruthy();
});
