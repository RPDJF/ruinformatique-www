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
			},
			animation: {
				sizeup: "sizeup 0.2s linear forwards",
			},
			keyframes: {
				sizeup: {
					"0%": { transform: "scale(1)" },
					"50%": { transform: "scale(1.08)" },
					"100%": { transform: "scale(1.06)" },
				},
			}
		},
	},
	plugins: [],
}

