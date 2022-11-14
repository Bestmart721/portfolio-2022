import { SET_PROJECT_FOCUS } from '../actions/types';

export default function(state = { index: -1, lock: false }, action) {
  switch (action.type) {
    case SET_PROJECT_FOCUS:
      const index = state.lock && action.payload.lock !== false ? // Currently locked and not unlocking
        state.index : // Stay put
        action.payload.index; // OR if we should be unlocked, we change
      return {
        index: index,
        lock: action.payload.lock !== null ? action.payload.lock : state.lock
      };
    default:
      return state;
  }
}
