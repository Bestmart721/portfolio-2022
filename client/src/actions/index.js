import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => {
  // Returns a function that can be asyncronously run by redux-thunk
  return async function(dispatch) {
    const res = await axios.get('/api/currentuser') // Send an AJAX request
    dispatch( // Only dispatch the action once we get a response
      {
        type: FETCH_USER,
        payload: res.data
      }
    );
  }
};
