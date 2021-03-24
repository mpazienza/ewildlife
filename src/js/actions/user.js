import { db } from '../utils/firebase';
import { store } from 'react-notifications-component';
import { loadOrganization } from './organization';
import { UPDATE_USER } from '../constants';

var userRef;

export const loadUser = ( user ) => {
  return ( dispatch, getState ) => {
    var state = getState();

    // first remove any existing userRefs
    if ( userRef ) {
      userRef();
    }

    userRef = db.collection( 'users' ).doc( `${ user.uid}` ).onSnapshot( snapshot => {
      var userMetaData = snapshot.data();

      dispatch( {
        type: UPDATE_USER,
        value: {
          uid: user.uid,
          email: user.email,
          first_name: userMetaData.first_name,
          last_name: userMetaData.last_name
        }
      } );

      // If the organization is different then load the new org
      if ( userMetaData.organization.id !== state.organization.uid ) {
        dispatch( loadOrganization( userMetaData.organization.id ) );
      }
    } );
  };
};

export const updateUserEmail = ( email ) => {
  return ( dispatch, getState ) => {
    var state = getState();

    // Make sure that the email is different before updating
    if ( email !== state.user.email ) {
      dispatch( {
        type: UPDATE_USER,
        value: {
          email: email
        }
      } );
    }
  };
};

export const updateUserMetaData = ( firstName, lastName ) => {
  return ( dispatch, getState ) => {
    var state = getState();
    
    var params = {
      first_name: firstName,
      last_name: lastName
    };

    db.collection( 'users' ).doc( `${ state.user.uid}` ).update( params ).then( () => {
      store.addNotification({
        title: "Success!",
        message: 'The user\'s information has been updated',
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
        message: 'There was a problem updating the user\'s information',
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