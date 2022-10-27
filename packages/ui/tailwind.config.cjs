const config = {
	darkMode: 'class',

	content: [
		'./src/**/*.{html,js,svelte,ts}',
		// Remember the relative import there
		'../../node_modules/@brainandbones/skeleton/**/*.{html,js,svelte,ts}'
	],

	theme: {
		extend: {}
	},

	plugins: [require('@brainandbones/skeleton/tailwind/theme.cjs')]
};

module.exports = config;
