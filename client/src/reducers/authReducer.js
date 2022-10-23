import { FETCH_USER } from '../actions/types';

// By default, state begins in null (request hanging)
export default function(state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false; // Payload will be "" if fetchUser()
    default:                          // finds we are logged out
      return state;
  }
}
