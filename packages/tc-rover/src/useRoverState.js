import React from 'react';

import createActionType from '@trend/utils/createActionType';
import createReducer from '@trend/utils/createReducer';
import useClosedState from '@trend/utils/hooks/useClosedState';
import setOptions from '@trend/utils/internal/setOptions';

const FIRST = createActionType('rover', 'first');
const LAST = createActionType('rover', 'last');
const MOVE = createActionType('rover', 'move');
const NEXT = createActionType('rover', 'next');
const PREVIOUS = createActionType('rover', 'previous');
const REGISTER = createActionType('rover', 'register');
const RESET = createActionType('rover', 'reset');
const UNREGISTER = createActionType('rover', 'unregister');

const optionProps = [
  'currentId',
  'first',
  'infinite',
  'last',
  'move',
  'next',
  'orientation',
  'previousId',
  'previous',
  'register',
  'reset',
  'unregister',
  'tabStops'
];

const reducer = createReducer({}, {
  [FIRST]: (state, action) => reducer(state, {
    type: MOVE,
    id: state.tabStops[0] && state.tabStops[0].id
  }),
  [LAST]: (state, action) => {
    const lastTabStop = state.tabStops[state.tabStops.length - 1];

    return reducer(state, { type: MOVE, id: lastTabStop && lastTabStop.id });
  },
  [MOVE]: (state, action) => {
    const { currentId, tabStops } = state;
    const { id } = action;
    const idx = tabStops.findIndex(tabStop => tabStop.id === id);
    const hasIdx = idx !== -1;
    const nextState = id === null
      ? {
        currentId: null,
        previousId: currentId,
      }
      : hasIdx
        ? { currentId: tabStops[idx].id, previousId: currentId }
        : {};

    return {
      ...state,
      ...nextState
    };
  },
  [NEXT]: (state, action) => {
    const { currentId, infinite, tabStops } = state;
    const idx = tabStops.findIndex(tabStop => tabStop.id === currentId);
    const newTabStops = [
      ...tabStops.slice(idx + 1),
      ...(infinite ? tabStops.slice(0, idx) : [])
    ];
    const nextIdx = newTabStops.findIndex(
      tabStop => tabStop.id === currentId) + 1;

    return reducer(state, {
      type: MOVE,
      id: currentId == null
        ? tabStops[0] && tabStops[0].id
        : newTabStops[nextIdx] && newTabStops[nextIdx].id
    });
  },
  [PREVIOUS]: (state, action) => {
    const { tabStops } = state;
    const { tabStops: _, ...nextState } = reducer({
      ...state,
      tabStops: tabStops.slice().reverse()
    }, {
      type: NEXT
    });

    return {
      ...state,
      ...nextState
    };
  },
  [REGISTER]: (state, action) => {
    const { tabStops } = state;
    const { id, ref } = action;

    if (tabStops.length === 0) {
      return {
        ...state,
        tabStops: [{ id, ref }]
      };
    }

    const idx = tabStops.findIndex(tabStop => tabStop.id === id);

    if (idx >= 0) {
      return state;
    }

    const afterRefIdx = tabStops.findIndex(tabStop => {
      const { current } = tabStop.ref;

      return (!current || !ref.current)
        ? false
        : !!(current.compareDocumentPosition(ref.current) &
          Node.DOCUMENT_POSITION_PRECEDING);
    });

    return {
      ...state,
      tabStops: afterRefIdx === -1
        ? [...tabStops, { id, ref }]
        : [
            ...tabStops.slice(0, afterRefIdx),
            { id, ref },
            ...tabStops.slice(afterRefIdx)
          ]
    };
  },
  [RESET]: (state, action) => ({
    ...state,
    currentId: null,
    previousId: null
  }),
  [UNREGISTER]: (state, action) => {
    const { currentId, previousId, tabStops } = state;
    const { id } = action;
    const nextTabStops = tabStops.filter(tabStop => tabStop.id !== id);
    const nextState = nextTabStops.length !== tabStops.length
     ? {
        tabStops: nextTabStops,
        previousId: previousId && previousId === id ? null : previousId,
        currentId: currentId && currentId === id ? null : currentId
      }
     : {};

    return {
      ...state,
      ...nextState
    };
  }
});

function useRoverState(initialState = {}) {
  const {
    currentId = null,
    infinite = false,
    orientation = undefined,
    ...closedState } = useClosedState(initialState);
  const [state, dispatch] = React.useReducer(reducer, {
    ...closedState,
    currentId,
    infinite,
    orientation,
    tabStops: [],
    previousId: null
  });

  return {
    ...state,
    first: React.useCallback(id => dispatch({ type: FIRST, id }), []),
    last: React.useCallback(id => dispatch({ type: LAST, id }), []),
    move: React.useCallback(id => dispatch({ type: MOVE, id }), []),
    next: React.useCallback(() => dispatch({ type: NEXT }), []),
    previous: React.useCallback(() => dispatch({ type: PREVIOUS }), []),
    register: React.useCallback((id, ref) => dispatch({
      type: REGISTER,
      id,
      ref
     }), []),
    unregister: React.useCallback(id => dispatch({
      type: UNREGISTER,
      id
    }), []),
    reset: React.useCallback(() => dispatch({ type: RESET }), []),
  }
}

export default setOptions(useRoverState, optionProps);
