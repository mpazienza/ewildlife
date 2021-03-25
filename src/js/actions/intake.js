import { db } from '../utils/firebase';
import { store } from 'react-notifications-component';
import { UPDATE_INTAKES } from '../constants';

var intakesRef;

/**
 * loadintakes - Loads the list of Intakes
 * @param {string} uid 
 * @returns 
 */
export const loadIntakes = ( uid ) => {
  return ( dispatch, getState ) => {
    var state = getState();
    var uid = uid || state.organization.uid;

    // Remove any existing refs
    if ( intakesRef ) {
      intakesRef();
    }

    var orgRef = db.collection('organizations').doc( uid );

    intakesRef = db.collection( 'intakes' ).where( 'organization', '==', orgRef ).orderBy('date', 'desc').onSnapshot( res => {
      var intakes = res.docs.map( doc => {
        var data = doc.data();

        return Object.assign({}, data, {
          uid: doc.id,
          organization: data.organization.id,
          species: data.species.id,
          family: data.species.parent.parent.id
        });
      } );

      dispatch( {
        type: UPDATE_INTAKES,
        value: {
          list: intakes
        }
      } );
    } );
  };
};