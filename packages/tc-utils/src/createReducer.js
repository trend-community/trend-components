/**
 * Express a reducer as an object mapping from action types to handlers.
 * @param {object} initialState - The initial state.
 * @param {object} handlers - Mapping of action types to handlers.
 * @returns {function} - Reducer function.
 * Resource: https://redux.js.org/recipes/structuring-reducers/refactoring-reducer-example
 */

function createReducer(initialState = {}, handlers = {}) {
  return function reducer(state = initialState, action = {}) {
    return handlers.hasOwnProperty(action.type)
      ? handlers[action.type](state, action)
      : state;
  }
}

export default createReducer;
