const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Montserrat, sans-serif", ...defaultTheme.fontFamily.sans],
				serif: ["Roboto, sans-serif", ...defaultTheme.fontFamily.serif],
			},
		},
	},
	plugins: [],
};
