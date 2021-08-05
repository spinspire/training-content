import firebase from 'firebase/app';
import config from './config';
import 'firebase/auth'; // for side-effects only

export const app = firebase.initializeApp(config);
