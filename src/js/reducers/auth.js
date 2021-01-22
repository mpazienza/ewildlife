const initialState = {
  status: 'ANONYMOUS',
  email: null,
  user: {
    recent: [],
    saved: []
  }
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'ATTEMPTING_LOGIN':
      return Object.assign({}, state, {
        status: 'AWAITING_RESPONSE',
        email: null
      });
    case 'LOGIN_USER':
      return Object.assign({}, state, {
        status: 'LOGGED_IN',
        email: action.email
      });
    case 'LOGOUT_USER':
      return Object.assign({}, initialState);
    case 'UPDATE_USER_DATA':
      return Object.assign({}, state, {
        user: action.value
      });
    case 'UPDATE_USER_SAVED':
      var tmp = Object.assign({}, state);
      tmp.user.saved = action.value;
      return tmp;
    case 'UPDATE_USER_RECENT':
      var tmp = Object.assign({}, state);
      tmp.user.recent = action.value;
      return tmp;
    case 'PUSH_RECENT':
      var newState = Object.assign({}, state);

      // Update the recent
      newState.user.recent.shift(action.value);

      return newState;
    case 'POP_RECENT':
      var newState = Object.assign({}, state);

      // Update the recent
      newState.user.recent.pop();

      return newState;
    case 'PUSH_SAVED':
      var newState = Object.assign({}, state);

      // Update the recent
      newState.user.saved.shift(action.value);

      return newState;
    default:
      return state;
  }
};

export default auth;