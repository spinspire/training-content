import auth from './init';

const logout = () => {
	auth()
		.signOut()
		.then((result) => {
			return null;
		})
		.catch((e) => {
			const errorCode = e.code;
			const errorMessage = e.message;
			alert(errorCode, ':\n ', errorMessage);

			const email = e.email;
			const credential = e.credential;
		});
};

export default logout;
