export { app } from './init';
export { default as user } from './userAuth';

// -------------------
// import { readable } from 'svelte/store';

// import firebase from 'firebase/app';
// import config from './config';
// import 'firebase/auth'; // for side-effects only
// import 'firebase/firestore';

// import {} from './firestore/';
// export const app = firebase.initializeApp(config);

// export const db = firebase.firestore();

// // 'user' is a readable store that is tied to the auth status of the firebase user
// export const user = readable(null, (setter) => {
// 	// listen for login/logout events and update user store
// 	firebase.auth().onAuthStateChanged((u) => {
// 		setter(u);
// 	});
// });

// // extra method on the store
// user.login = async function () {
// 	try {
// 		const provider = new firebase.auth.GoogleAuthProvider();
// 		await firebase.auth().signInWithPopup(provider);
// 		const user = await firebase.auth().currentUser;
// 		await createUser(user);
// 	} catch (e) {
// 		const message = `${e.code}\n${e.message}`;
// 		console.error(message);
// 		alert(message);
// 	}
// };

// // extra method on the store
// user.logout = async function () {
// 	try {
// 		await firebase.auth().signOut();
// 	} catch (e) {
// 		const message = `${e.code}\n${e.message}`;
// 		console.error(message);
// 		alert(message);
// 	}
// };

// // user.updateLocation = async () => {
// // 	try {
// // 		const user = await firebase.auth().currentUser;

// // 		//TODO: Case for no current user
// // 		await users.doc(user.uid).set(
// // 			{
// // 				locationURL: window.location.href,
// // 				locationTitle: document.title,
// // 			},
// // 			{ merge: true }
// // 		);
// // 	} catch (e) {
// // 		const message = `${e.code}\n${e.message}`;
// // 		console.error(message);
// // 		alert(message);
// // 	}
// // };

// // user.getLastLocation = async () => {
// // 	try {
// // 		const userData = await firebase.auth().currentUser;
// // 		const user = users.doc(userData.uid);
// // 		const doc = await user.get();

// // 		if (doc.exists) {
// // 			const { locationTitle, locationURL } = doc.data();
// // 			return { locationTitle, locationURL };
// // 		} else {
// // 			console.log('No such document!');
// // 		}
// // 	} catch (e) {
// // 		const message = `${e.code}\n${e.message}`;
// // 		console.error(message);
// // 		alert(message);
// // 	}
// // };
