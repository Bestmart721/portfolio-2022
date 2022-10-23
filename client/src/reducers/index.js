import { combineReducers } from 'redux';
import authReducer from './authReducer';
import paneReducer from './paneReducer';
import commentReducer from './commentReducer';

export default combineReducers(
  {
    auth: authReducer,
    pane: paneReducer,
    comments: commentReducer
  }
)
