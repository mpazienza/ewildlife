import { UPDATE_INTAKES } from '../constants';

const initialState = {
  list: []
};

const intakes = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_INTAKES:
      return Object.assign( {}, state, action.value );
    default:
      return state;
  }
};

export default intakes;