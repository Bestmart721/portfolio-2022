import { SET_PANE, END_PANE_MOVE } from '../actions/types';

// By default, state begins in null (request hanging)
export default function(state = {
    current: 'landing',
    previous: null,
    moving: false }, action) {
  switch (action.type) {
    case END_PANE_MOVE:
      return {
        current: state.current,
        previous: state.previous,
        moving: false
      };
    case SET_PANE:
      return {
        current: action.payload,
        previous: state.current,
        moving: true
      };
    default:
      return state;
  }
}
