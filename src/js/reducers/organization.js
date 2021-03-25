import { UPDATE_ORGANIZATION } from '../constants';

const initialState = {
  uid: null,      // The Organization ID
  name: null,     // The Organization Name
  owner: null,    // The Organization Owner's UID
  isOwner: false, // Is the current user the owner?
  members: [],    // Organization Members
  taxonomy: null  // Animal Taxonomy
};

const organization = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ORGANIZATION:
      return Object.assign( {}, state, action.value );
    default:
      return state;
  }
};

export default organization;