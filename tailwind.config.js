/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
	content: [
    './script/*.js',
    './index.html',
  ],
	theme: {
		colors: {
			white: colors.white,
			'soft-red': 'var(--soft-red)',
			'soft-blue': 'var(--soft-blue)',
			'dark-blue': 'var(--dark-blue)',
			'light-blue': 'var(--light-blue)',
			'soft-violet': 'var(--soft-violet)',
			'grayish-blue': 'var(--grayish-blue)',
			'dark-grayish-blue': 'var(--dark-blue)',
		},
		extend: {},
	},
	plugins: [],
};
