import Auth from './Auth.svelte';

new Auth({
	target: document.getElementById('auth'),
	props: {
		name: 'User',
		loggedIn: false,
	},
});

// export default app;
