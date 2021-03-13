import firebase from '../utils/firebase';
import { ATTEMPTING_LOGIN, ERROR_LOGIN, LOGIN_USER, LOGOUT_USER } from '../constants';

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

export const loginUser = (user) => {
  return ( dispatch ) => {
    console.log( user);
    // dispatch( {
    //   type: LOGIN_USER,
    //   value: {}
    // } );
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