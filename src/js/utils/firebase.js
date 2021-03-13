import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import config from '../env';

firebase.initializeApp( config );

export default firebase;