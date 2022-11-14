import axios from 'axios';
import {
  FETCH_USER,
  FETCH_COMMENTS,
  POST_COMMENT,
  SET_PANE,
  END_PANE_MOVE
} from './types';

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

export const fetchComments = () => {
  // Returns a function that can be asyncronously run by redux-thunk
  return async function(dispatch) {
    const res = await axios.get('/api/comments') // Send an AJAX request
    dispatch( // Only dispatch the action once we get a response
      {
        type: FETCH_COMMENTS,
        payload: res.data
      }
    );
  }
};

export const postComment = (comment) => {
  // Returns a function that can be asyncronously run by redux-thunk
  return async function(dispatch) {
    const res = await axios.post('/api/comments/new', comment); // AJAX request
    dispatch( // Only dispatch the action once we get a response
      {
        type: POST_COMMENT,
        payload: res.data
      }
    );
    dispatch(fetchUser());
  }
};

export const setPane = (pane) => {
  return async function(dispatch) {
    dispatch(
      {
        type: SET_PANE,
        payload: pane
      }
    );
    setTimeout(() => dispatch(
      {
        type: END_PANE_MOVE,
        payload: pane
      }
    ), 600);
  };
};
