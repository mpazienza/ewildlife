// const initialState = {
//   uid: null,   // The Organization ID
//   name: null,  // The Organization Name
//   members: [], // Organization Members
//   taxonomy: {} // Animal Taxonomy
// };

// DELETE
const initialState = {
  uid: 'yfCEj9xPQ2N6dVnpxTSK',
  name: 'All Things Wild',
  taxonomy: {
    1: {
      name: 'Bird',
      species: {
        1: {
          name: 'Mocking Bird'
        }
      }
    }
  }
};

const organization = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default organization;