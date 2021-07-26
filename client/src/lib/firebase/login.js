/*---------------
  --- IMPORTS ---
  ---------------*/
// ~~~ Firebase ~~~
import auth from './init';

/*---------------
  --- GLOBALS ---
  ---------------*/
let provider = new auth.GoogleAuthProvider();

/*-------------
  --- LOGIC ---
  -------------*/
// Uses Firebase Auth's Google provider to sign a user in.
const login = () => {
	auth()
		.signInWithPopup(provider)
		.then((result) => {
			// What will these be used for? Stored in DB?
			const credential = result.credential;
			const token = credential.accessToken;

			//Returns a user object.
			return result;
		})
		.catch((e) => {
			const errorCode = e.code;
			const errorMessage = e.message;
			alert(errorCode, ':\n ', errorMessage);

			const email = e.email;
			const credential = e.credential;

			//Returns null to remain consistent with default state of user in stores.js.
			return null;
		});
};

/*---------------
  --- EXPORTS ---
  ---------------*/
export default login;
