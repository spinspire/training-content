import { readable } from 'svelte/store';

import firebase from 'firebase/app';
import config from './config';
import 'firebase/auth'; // for side-effects only
import 'firebase/firestore';

const app = firebase.initializeApp(config);

export const db = firebase.firestore();

const users = db.collection('users');

export const createUser = async (user) => {
	try {
		await users.doc(user.uid).set(
			{
				uid: user.uid,
				displayName: user.displayName,
			},
			{ merge: true }
		);
	} catch (error) {
		console.error(error);
	}
};

export const updateUserLocation = async () => {
	const currentLocationURL = window.location.href;
	const user = await firebase.auth().currentUser;
	try {
		await users.doc(user.uid).set(
			{
				locationURL: currentLocationURL,
				locationTitle: document.title,
			},
			{ merge: true }
		);
	} catch (error) {
		console.error(error);
	}
};

// 'user' is a readable store that is tied to the auth status of the firebase user
export const user = readable(null, (setter) => {
	// listen for login/logout events and update user store
	firebase.auth().onAuthStateChanged((u) => {
		setter(u);
	});
});

// extra method on the store
user.login = async function () {
	try {
		const provider = new firebase.auth.GoogleAuthProvider();
		await firebase.auth().signInWithPopup(provider);
		const user = await firebase.auth().currentUser;
		await createUser(user);
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
