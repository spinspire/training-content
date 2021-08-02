import Auth from './Auth.svelte';
import Swup from 'swup';
import SwupTheme from '@swup/overlay-theme';

// swup gives ajax page transitions. See https://swup.js.org/
const containers = ['#swup', 'header>h1', 'footer span.author'].filter((c) => {
	// filter out non-existent containers
	const element = document.querySelector(c);
	if (element) {
		return element;
	} else {
		console.warn('Swup container not found: ', c);
	}
});
const plugins = [
	new SwupTheme({
		duration: 50,
	}),
];
const swup = new Swup({
	containers,
	plugins,
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
