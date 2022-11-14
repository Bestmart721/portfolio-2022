import { SET_PROJECT_FOCUS } from '../actions/types';

export default function(state = { index: -1 }, action) {
  switch (action.type) {
    case SET_PROJECT_FOCUS:
      return {
        index: action.payload
      };
    default:
      return state;
  }
}
