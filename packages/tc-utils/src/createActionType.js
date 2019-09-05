/**
 * Create consistent action types following "Ducks" methodology.
 * @param {string} module - Module action belongs to.
 * @param {string} type - Type of action.
 * @returns {string} The action type.
 * @resoure https://github.com/erikras/ducks-modular-redux
 */

import isString from './internal/isString';

function actionTypeCreator(module, type) {
  if (!isString(module)) {
    throw Error('Argument `module` expects a string.');
  }

  if(!isString(type)) {
    throw Error('Argument `type` expects a string.');
  }

  return `@trend/${module}/${type}`;
}

export default actionTypeCreator;
