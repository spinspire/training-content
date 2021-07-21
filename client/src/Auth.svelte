<script>
	export let name;
	export let loggedIn = false;

	const handleLoginClick = (e) => {
		loggedIn = loggedIn ? false : true; 
	};

	const handleRegisterClick = () => {
		alert('No register behavior.')
	};

</script>

<span>	
	{#if loggedIn}
		<span>
			<p>{name}</p>
		</span>
		<button on:click|preventDefault={handleLoginClick}>Log Out</button>	
	{:else}
		<button on:click|preventDefault={handleLoginClick}>Login</button>
		<button on:click|preventDefault={handleRegisterClick}>Register</button>
	{/if}
	</span>