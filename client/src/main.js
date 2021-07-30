import Auth from './Auth.svelte';
import Swup from 'swup';

// gives ajax page transitions. See https://swup.js.org/
const swup = new Swup({
	containers: [
		'#swup',
		'header>h1',
		'footer span.author',
	]
});

new Auth({
	target: document.getElementById('auth'),
	props: {
		// name: 'User',
		// user: null,
		// loggedIn: false,
	},
});

// export default app;
