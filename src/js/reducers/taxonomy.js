import { UPDATE_TAXONOMY } from '../constants';

const initialState = {
  uid: null,  // The Taxonomy ID
  families: [] // The Animal Families
};

const taxonomy = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TAXONOMY:
      return Object.assign( {}, state, action.value );
    default:
      return state;
  }
};

export default taxonomy;