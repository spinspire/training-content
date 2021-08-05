import { db } from './init';

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

export async function updateLocation(user, url, title) {
	try {
		await users.doc(user.uid).set(
			{
				location: { url, title },
			},
			{ merge: true }
		);
	} catch (e) {
		const message = `${e.code}\n${e.message}`;
		console.error(message);
		alert(message);
	}
}

export const getLocation = async (user) => {
	try {
		const userCollection = users.doc(user.uid);
		const doc = await userCollection.get();

		if (doc.exists) {
			const { location } = doc.data();
			return location;
		} else {
			console.log('No such document!');
		}
	} catch (e) {
		const message = `${e.code}\n${e.message}`;
		console.error(message);
		alert(message);
	}
};
