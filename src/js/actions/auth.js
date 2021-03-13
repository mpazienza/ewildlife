import firebase, { db } from '../utils/firebase';
import { ATTEMPTING_LOGIN, AWAITING_RESPONSE, FORGOT_PASSWORD, PASSWORD_SENT, ERROR_LOGIN, LOGIN_USER, LOGOUT_USER, LOAD_ORGANIZATION } from '../constants';

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
    var userRef = db.collection( 'users' ).doc( `${ user.uid}` );

    userRef.onSnapshot( snapshot => {
      var userMetaData = snapshot.data();

      dispatch( {
        type: LOGIN_USER,
        value: {
          uid: user.uid,
          email: user.email,
          first_name: userMetaData.first_name,
          last_name: userMetaData.last_name
        }
      } );

      var orgRef = userMetaData.organization;
      orgRef.onSnapshot( snapshot => {
        var orgMetaData = snapshot.data();

        dispatch( {
          type: LOAD_ORGANIZATION,
          value: {
            name: orgMetaData.name,
            isOwner: ( user.uid === orgMetaData.owner )
          }
        } );
      } ) ;
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