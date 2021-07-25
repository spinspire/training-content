import auth from './init';

let provider = new auth.GoogleAuthProvider();

const login = () => {
	auth()
		.signInWithPopup(provider)
		.then((result) => {
			const credential = result.credential;
			const token = credential.accessToken;

			return result;
		})
		.catch((e) => {
			const errorCode = e.code;
			const errorMessage = e.message;
			alert(errorCode, ':\n ', errorMessage);

			const email = e.email;
			const credential = e.credential;

			return null;
		});
};

export default login;
