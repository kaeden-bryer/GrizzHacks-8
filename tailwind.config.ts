import type { Config } from "tailwindcss";

export default {
	content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				light: "#f6f6e9",
				primary: "#3d81a8",
				secondary: "#a89a64",
				heading: "#f8e894",
			},
      fontFamily: {
        recoleta: ['Recoleta', 'sans-serif']
      }
		},
    
	},
	plugins: [],
} satisfies Config;
