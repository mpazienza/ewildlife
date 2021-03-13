import { combineReducers } from 'redux';
import auth from './auth';
import organization from './organization';
import user from './user';

export default combineReducers({
  auth,
  organization,
  user
});