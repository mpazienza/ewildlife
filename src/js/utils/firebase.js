import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import config from '../env';

firebase.initializeApp( config );

// Export the Firestore DB
export const db = firebase.firestore();

export default firebase;