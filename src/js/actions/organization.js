import { db } from '../utils/firebase';
import { store } from 'react-notifications-component';
import { LOAD_ORGANIZATION } from '../constants';

var orgRef;

export const loadOrganization = ( uid ) => {
  return ( dispatch, getState ) => {
    var state = getState();

    // Remove any existing org refs
    if ( orgRef ) {
      orgRef();
    }

    orgRef = db.collection( 'organizations' ).doc( `${ uid}` ).onSnapshot( snapshot => {
      var orgMetaData = snapshot.data();

      dispatch( {
        type: LOAD_ORGANIZATION,
        value: {
          uid: uid,
          name: orgMetaData.name,
          isOwner: ( state.user.uid === orgMetaData.owner )
        }
      } );
    } );
  };
};

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