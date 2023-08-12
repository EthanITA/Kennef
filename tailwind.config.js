/** @type {import('tailwindcss').Config} */
module.exports = {
	prefix: 'tw-',
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {},
		colors: {
			primary: '#ea5734',
			secondary: '#003f4b'
		}
	},
	plugins: []
}
