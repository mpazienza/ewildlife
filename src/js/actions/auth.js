import firebase, { db } from '../utils/firebase';
import { loadUser } from './user';
import { ATTEMPTING_LOGIN, AWAITING_RESPONSE, FORGOT_PASSWORD, PASSWORD_SENT, ERROR_LOGIN, UPDATE_USER, LOGOUT_USER, LOAD_ORGANIZATION, LOGIN_USER } from '../constants';

export const checkAuth = () => {
  return ( dispatch ) => {
    dispatch( {
      type: ATTEMPTING_LOGIN
    } );


    firebase.auth().onAuthStateChanged( user => {
      if ( user ) {
        dispatch( loginUser( user ) );
      } else {
        dispatch( logoutUser() );
      }
    } );


  };
};

export const attemptLoginWithEmail = ( email, password ) => {
  return ( dispatch ) => {
    dispatch( {
      type: AWAITING_RESPONSE
    } );

    firebase.auth().signInWithEmailAndPassword( email, password ).catch( e => {
      dispatch( {
        type: ERROR_LOGIN,
        value: e
      } );

      console.error( e );
    });
  };
};

export const forgotPassword = ( email ) => {
  return ( dispatch ) => {
    dispatch( {
      type: FORGOT_PASSWORD
    } );

    firebase.auth().sendPasswordResetEmail( email ).then( () => {
      dispatch( {
        type: PASSWORD_SENT,
      } );

    } ).catch( e => {
      dispatch( {
        type: ERROR_LOGIN,
        value: e
      } );

      console.error( e );
    });
  };
};

export const loginUser = (user) => {
  return ( dispatch ) => {
    // Load the User
    dispatch( loadUser( user ) );

    dispatch( {
      type: LOGIN_USER
    } );
  };
};

export const logoutUser = () => {
  return ( dispatch ) => {
    firebase.auth().signOut().then( () => {
      dispatch( {
        type: LOGOUT_USER
      } );
    } ).catch( e => {
      console.error( e );
    } );
  };
};