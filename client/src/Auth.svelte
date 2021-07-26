<script>
	import { onDestroy } from "svelte";
	import { user } from "./stores"

	import { auth, login, logout } from "./lib/firebase/index";

	let userValue;
	const unsubscribe = user.subscribe(value => {
		userValue = value;
	});

	$: {
		auth().onAuthStateChanged(result => {
			if (result) {
				user.set(result);
			}
		});
	}


	const handleLoginClick = (e) => {
		user.set(login());
	};

	const handleLogOutClick = () => {
		const name = userValue.displayName; 
		user.set(logout());
		if (!userValue){
			alert(`${name} has been logged out!`);
		}
	};

	const handleGetCurrentUser = () => {
		console.log(userValue);
	};

	onDestroy(unsubscribe);
</script>

<nav class="navbar navbar-expand-lg navbar-light">
	<div class="container-fluid">
		<ul class="navbar-nav me-auto mb-2 mb-lg-0">
			{#if userValue != null}
			<li class="nav-item ">
				<p class="h1">{userValue.displayName}</p>
			</li>
			<img class="profile-pic" src={userValue.photoURL} alt="{userValue.displayName}'s profile picture.">
			<li class="nav-item">
				<button on:click|preventDefault={handleLogOutClick}>Log Out</button>	
			</li>
			{:else}
			<li class="nav-item">
				<button on:click|preventDefault={handleLoginClick}>Login</button>
			</li>
			{/if}
			<li class="nav-item">
				<button on:click|preventDefault={handleGetCurrentUser}>Get current user</button>
			</li>
		</ul>
	</div>
</nav>