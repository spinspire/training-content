<script>
	import { user } from "./stores"
	import { auth, login, logout } from "./lib/firebase/index";

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
		const name = $user.displayName; 
		user.set(logout());
		if (!$user){
			alert(`${name} has been logged out!`);
		}
	};
</script>

<nav class="navbar navbar-expand-lg navbar-light">
	<div class="container-fluid">
		<ul class="navbar-nav me-auto mb-2 mb-lg-0">
			{#if $user != null}
			<li class="nav-item ">
				<p class="h1">{$user.displayName}</p>
			</li>
			<img class="profile-pic" src={$user.photoURL} alt="{$user.displayName}'s profile picture.">
			<li class="nav-item">
				<button on:click|preventDefault={handleLogOutClick}>Log Out</button>	
			</li>
			{:else}
			<li class="nav-item">
				<button on:click|preventDefault={handleLoginClick}>Login</button>
			</li>
			{/if}
		</ul>
	</div>
</nav>