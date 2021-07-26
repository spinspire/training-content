import { readable } from 'svelte/store';

import firebase from 'firebase/app';
import config from './config';
import 'firebase/auth'; // for side-effects only

const app = firebase.initializeApp(config);

// 'user' is a readable store that is tied to the auth status of the firebase user
export const user = readable(null, (setter) => {
  // listen for login/logout events and update user store
  firebase.auth().onAuthStateChanged(u => {
    setter(u);
  });
});

// extra method on the store
user.login = async function () {
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    await firebase.auth().signInWithPopup(provider);
  } catch (e) {
    const message = `${e.code}\n${e.message}`;
    console.error(message);
    alert(message);
  }
};

// extra method on the store
user.logout = async function () {
  try {
    await firebase.auth().signOut();
  } catch (e) {
    const message = `${e.code}\n${e.message}`;
    console.error(message);
    alert(message);
  }
};
