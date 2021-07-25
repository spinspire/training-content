import firebase from 'firebase/app';
import config from './config';
import 'firebase/auth'; // for side-effects only

const app = firebase.initializeApp(config);
const auth = firebase.auth;

export default auth;
// export default app;
