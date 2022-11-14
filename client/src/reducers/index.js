import { combineReducers } from 'redux';
import authReducer from './authReducer';
import paneReducer from './paneReducer';
import commentReducer from './commentReducer';
import projectReducer from './projectReducer';

export default combineReducers(
  {
    auth: authReducer,
    pane: paneReducer,
    comments: commentReducer,
    project_focus: projectReducer
  }
)
