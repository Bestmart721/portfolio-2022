import { SET_PANE } from '../actions/types';

// By default, state begins in null (request hanging)
export default function(state = {current: "landing", previous: null}, action) {
  switch (action.type) {
    case SET_PANE:
      return {
        current: action.payload,
        previous: state.current
      };
    default:
      return state;
  }
}
