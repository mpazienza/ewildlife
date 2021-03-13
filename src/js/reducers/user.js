import { UPDATE_USER, LOGIN_USER, LOGOUT_USER } from '../constants';

// const initialState = {
//   uid: null,         // User ID
//   email: null,       // User Email
//   first_name: null,  // User First Name
//   last_name: null,   // User Last Name
//   organization: null // Organization Reference
// };

// DELETE
const initialState = {
  uid: 'akProYrz7IUGwepzXuSlUSSWmYn2',
  email: 'michael@mashbox.com',
  first_name: 'Michael',
  last_name: 'Pazienza',
  organization: 'yfCEj9xPQ2N6dVnpxTSK'
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return Object.assign( {}, state, action.value );
    case LOGIN_USER:
      return Object.assign( {}, state, action.value );
    case LOGOUT_USER:
      return Object.assign( {}, initialState );
    default:
      return state;
  }
};

export default user;