import firebase, { db } from '../utils/firebase';
import { ATTEMPTING_LOGIN, AWAITING_RESPONSE, FORGOT_PASSWORD, PASSWORD_SENT, ERROR_LOGIN, LOGIN_USER, LOGOUT_USER } from '../constants';

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
    // Fetch the Meta Data from Firebase
    var userMetaData = db.collection( 'users' ).doc( `${ user.uid}` );

    userMetaData.onSnapshot( snapshot => {
      var data = snapshot.data();

      dispatch( {
        type: LOGIN_USER,
        value: {
          uid: user.uid,
          email: user.email,
          first_name: data.first_name,
          last_name: data.last_name
        }
      } );

      // dispatch( {
      //   type: LOAD_ORGANIZATION,
      //   value: {}
      // } );
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