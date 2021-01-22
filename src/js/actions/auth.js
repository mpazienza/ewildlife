import firebase from '../utils/firebase';
import { showMessage } from './messages';
import { loadUserData, loadWorkflows } from './config';

const triggerLogin = (email) => {
  return (dispatch, getState) => {
    dispatch({
      type: 'LOGIN_USER',
      email: email
    });
    dispatch(loadWorkflows());
    dispatch(loadUserData(email));
  };
};

export const manualAuth = (email) => {
  return (dispatch, getState) => {
    var s = getState();
    if (email) {
      let pw = 'dummypassword';

      firebase.auth().signInWithEmailAndPassword(`auto-${email}`, pw).catch( (err) => {

        if ( 'auth/user-not-found' === err.code ) {
          firebase.auth().createUserWithEmailAndPassword(`auto-${email}`, pw).catch( (err) => {
            console.error(err);
          } );
        } {
          console.error(err);
        }

      });
    }
  };
};

export const startListeningToAuth = () => {
  return (dispatch, getState) => {
    dispatch({
      type: 'ATTEMPTING_LOGIN'
    });

    firebase.auth().onAuthStateChanged( (user) => {
      if (user) {
        dispatch(triggerLogin(user.email.replace('auto-', '')));
      } else {
        dispatch(logoutUser());
      }
    } );
  };
};

export const attemptLogin = (email, password) => {
  return (dispatch, getState) => {
    firebase.auth().signInWithEmailAndPassword(email, password).catch( (err) => {
      showMessage('Whoops, I was unable to log in with those credentials.', 'error');
      console.error(err);
    });
  };
};

export const logoutUser = () => {
  return (dispatch, getState) => {
    firebase.auth().signOut().then( () => {
      dispatch({
        type: 'LOGOUT_USER'
      });
    }).catch( (err) => {
      console.error(err);
    });
  };
};

export const updatePassword = (password, newPassword) => {
  return new Promise( (resolve, reject) => {
    var user = firebase.auth().currentUser;
    var cred = firebase.auth.EmailAuthProvider.credential(user.email, password);

    user.reauthenticateAndRetrieveDataWithCredential(cred).then(() => {
      firebase.auth().currentUser.updatePassword(newPassword).then( () => {
        showMessage('Your password was updated.');
        resolve(true);
      }).catch( (err) => {
        showMessage('I was not able to update your password', 'error');
        reject(err);
      });
    }).catch( (err) => {
      reject(err);
      showMessage('Hmm looks like that wasn\'t the right password', 'error');
    });
  } );
};
