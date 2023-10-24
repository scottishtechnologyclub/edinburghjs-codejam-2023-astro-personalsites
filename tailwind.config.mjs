/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				base: "#f5f5f5",
				primary: "#6be3ed",
				primaryDark: "#31696E",
				text: "#242424",
				white: "#ffffff",
				yellow: "#fff25e",
				black: "#000000",
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
}
