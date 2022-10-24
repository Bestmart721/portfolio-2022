import { FETCH_COMMENTS, POST_COMMENT } from '../actions/types';

// By default, state begins in null (request hanging)
export default function(state = null, action) {
  switch (action.type) {
    case FETCH_COMMENTS:
      return action.payload;
    case POST_COMMENT:
      console.log("POST_COMMENT");
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
}
