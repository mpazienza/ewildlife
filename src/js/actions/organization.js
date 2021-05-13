import { db } from '../utils/firebase';
import { store } from 'react-notifications-component';
import { loadTaxonomy } from './taxonomy';
import { loadIntakes } from './intake';
import { UPDATE_ORGANIZATION } from '../constants';

var orgRef;

/**
 * loadOrganization - Loads the data listener for the organization
 * @param {string} uid 
 * @returns 
 */
export const loadOrganization = ( uid ) => {
  return ( dispatch, getState ) => {
    var state = getState();

    // Remove any existing org refs
    if ( orgRef ) {
      orgRef();
    }

    orgRef = db.collection( 'organizations' ).doc( `${uid}` ).onSnapshot( snapshot => {
      var orgMetaData = snapshot.data();

      dispatch( {
        type: UPDATE_ORGANIZATION,
        value: {
          uid: uid,
          name: orgMetaData.name,
          owner: orgMetaData.owner,
          isOwner: ( state.user.uid === orgMetaData.owner )
        }
      } );

      // If the taxonomy is different then load the new taxonomy
      if ( !orgMetaData.taxonomy.uid !== state.taxonomy.uid ) {
        // dispatch( loadTaxonomy( orgMetaData.taxonomy.id ) );
      }

      // Load the members
      // dispatch( getOrganizationMembers() );

      // Load the intakes
      // dispatch( loadIntakes() );
    } );
  };
};

/**
 * updateOrganizationMetaData - update the non-id data for the organization
 * @param {string} name 
 * @returns 
 */
export const updateOrganizationMetaData = ( name ) => {
  return ( dispatch, getState ) => {
    var state = getState();
    
    var params = {
      name: name
    };

    db.collection( 'organizations' ).doc( `${ state.organization.uid}` ).update( params ).then( () => {
      store.addNotification({
        title: "Success!",
        message: 'The organization\'s information has been updated',
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animated", "fadeInDown"],
        animationOut: ["animated", "fadeOutDown"],
        dismiss: {
          duration: 2000
        }
      });
    } ).catch( () => {
      store.addNotification({
        title: "Error",
        message: 'There was a problem updating the organization data',
        type: "danger",
        insert: "top",
        container: "top-right",
        animationIn: ["animated", "fadeInDown"],
        animationOut: ["animated", "fadeOutDown"],
        dismiss: {
          duration: 2000
        }
      });
    } );
  };
};

/**
 * getOrganizationMembers - loads the users that are associated with the organization
 * @param {string} uid (optional, default loads the current loaded org) 
 */
export const getOrganizationMembers = ( uid ) => {
  return ( dispatch, getState ) => {
    var state = getState();
    var uid = uid || state.organization.uid;

    var orgRef = db.collection('organizations').doc( uid );
    
    // Find all of the users with the organization attached
    db.collection('users').where( 'organization', '==', orgRef ).get().then( res => {
      var members = res.docs.map( user => { 
        var metaData = user.data();

        return {
          uid: user.id,
          first_name: metaData.first_name,
          last_name: metaData.last_name,
          isOwner: ( state.organization.owner === user.id )
        };
       } );

       dispatch( {
         type: UPDATE_ORGANIZATION,
         value: {
           members
         }
       } );
    } );
  };
};