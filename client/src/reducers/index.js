import { combineReducers } from 'redux';
import authReducer from './authReducer';
import paneReducer from './paneReducer';

export default combineReducers(
  {
    auth: authReducer,
    pane: paneReducer
  }
)
