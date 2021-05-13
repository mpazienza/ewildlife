import { db } from '../utils/firebase';
import { store } from 'react-notifications-component';
import { UPDATE_TAXONOMY } from '../constants';

var taxonomyRef;
var familyRef;

export const loadTaxonomy = ( uid ) => {
  return ( dispatch ) => {

    // Remove any existing taxonomy refs
    if ( taxonomyRef ) {
      taxonomyRef();
      familyRef();
    }

    var docRef = db.collection( 'taxonomies' ).doc( `${uid}` );
    taxonomyRef = docRef.onSnapshot( snapshot => {

      var familyRef = docRef.collection('family');
      var familyPromises = [];

      // Fetch all of the families and convert to an object
      familyRef.get().then( fData => {

        fData.docs.forEach( fDoc => {

          familyPromises.push( new Promise( ( fresolve, freject ) => {
            var speciesRef = familyRef.doc(`${fDoc.id}`).collection('species');
            var speciesPromises = new Promise( ( sresolve, sreject ) => {
              // Fetch all of the species for a family and convert to an object
              speciesRef.get().then( sData => {
                sresolve( sData.docs.map( sDoc => {
                  return Object.assign( {}, sDoc.data(), {
                    uid: sDoc.id
                  } );
                } ) );
              } ).catch( () => {
                sreject();
              } );
            } ).then( species => {
              fresolve( Object.assign( {}, fDoc.data(), {
                uid: fDoc.id,
                species
              } ) );
            } ).catch( () => {
              freject();
            } );

          } ) );

        } );

        Promise.all( familyPromises ).then( families => {
          dispatch( {
            type: UPDATE_TAXONOMY,
            value: {
              uid: snapshot.id,
              families: families
            }
          } );
        } );

      } );
    } );
  };
};