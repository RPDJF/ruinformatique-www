/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html, js}"],
	theme: {
		extend: {
			colors: {
				primary: "#192833",
				secondary: "#192833AB",
				interactive: "#133d62",
				blacktransp: "#00000080",
			},
			fontFamily: {
				"didact-gothic": ["Didact Gothic"],
			}
		},
	},
	plugins: [],
}

