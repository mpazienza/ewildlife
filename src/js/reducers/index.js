import { combineReducers } from 'redux';
import auth from './auth';
import organization from './organization';
import taxonomy from './taxonomy';
import intakes from './intakes';
import user from './user';

export default combineReducers({
  auth,
  organization,
  taxonomy,
  intakes,
  user
});