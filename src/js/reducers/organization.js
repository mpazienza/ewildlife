import { UPDATE_ORGANIZATION } from '../constants';

const initialState = {
  uid: null,   // The Organization ID
  name: null,  // The Organization Name
  isOwner: false,
  members: [], // Organization Members
  taxonomy: null // Animal Taxonomy
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