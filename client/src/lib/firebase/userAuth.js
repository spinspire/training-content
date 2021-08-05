import { readable } from 'svelte/store';
import firebase from 'firebase/app';

import { createUser } from './firestore/index';

const user = readable(null, (setter) => {
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

export default user;
