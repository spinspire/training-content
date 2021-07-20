import Auth from './Auth.svelte';

new Auth({
	target: document.getElementById('auth'),
	props: {
		name: 'TheUser',
	},
});

// export default app;
