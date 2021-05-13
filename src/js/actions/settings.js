import firebase from '../utils/firebase';

/**
 * loadSettings - Load all of the data needed globally for the app.
 * @returns 
 */
export const loadSettings = () => {
  return ( dispatch ) => {
    // First load the Animal Taxonomy
    dispatch( loadTaxonomy() );

    // Load the Methods
    dispatch( loadMethods );

    // Load the Reasons
    dispatch( loadReasons );
  };
};

export const loadTaxonomy = () => {
  return ( dispatch ) => {
    // Get the Taxonomy
  };
};

export const loadMethods = () => {
  return ( dispatch ) => {
    // Get the Methods
  };
};

export const loadReasons = () => {
  return ( dispatch ) => {
    // Get the Reasons
  };
};