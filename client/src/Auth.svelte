<script>
	import { onDestroy } from "svelte";
	import { user } from "./stores"

	import { auth } from "./lib/firebase/index";

	let userValue;
	const unsubscribe = user.subscribe(value => {
		userValue = value;
	});

	let provider = new auth.GoogleAuthProvider();

	$: {
		auth().onAuthStateChanged(result => {
			if (result) {
				user.set(result);
			}
		});
	}


	const handleLoginClick = (e) => {
		auth()
			.signInWithPopup(provider)
			.then(result => {
				const credential = result.credential;
				const token = credential.accessToken;

				user.set(result.user)
			})
			.catch(e => {
				const errorCode = e.code;
				const errorMessage = e.message;
				alert(errorCode, ":\n ", errorMessage);

				const email = e.email;
				const credential = e.credential;
			})
	};

	const handleLogOutClick = () => {
		auth()
			.signOut()
			.then(result => {
				alert(`${userValue.displayName} has been logged out!`);
				user.set(null);
			})
			.catch(e => {
				const errorCode = e.code;
				const errorMessage = e.message;
				alert(errorCode, ":\n ", errorMessage);

				const email = e.email;
				const credential = e.credential;	
			});
	};
	const handleGetCurrentUser = () => {
		console.log(userValue);
	};

	onDestroy(unsubscribe);
</script>

<span>	
	{#if userValue != null}
		<span>
			<p>{userValue.displayName}</p>
		</span>
		<button on:click|preventDefault={handleLogOutClick}>Log Out</button>	
	{:else}
		<button on:click|preventDefault={handleLoginClick}>Login</button>
	{/if}
	<button on:click|preventDefault={handleGetCurrentUser}>Get current user</button>
	</span>