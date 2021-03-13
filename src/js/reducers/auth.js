import { ANONYMOUS, ATTEMPTING_LOGIN, AWAITING_RESPONSE, LOGIN_USER, LOGOUT_USER, AUTHENTICATED } from '../constants';

const initialState = {
  status: ANONYMOUS
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case ATTEMPTING_LOGIN:
      return Object.assign({}, state, {
        status: AWAITING_RESPONSE
      });
    case LOGIN_USER:
      return Object.assign({}, state, {
        status: AUTHENTICATED
      });
    case LOGOUT_USER:
      return Object.assign({}, initialState);
    default:
      return state;
  }
};

export default auth;