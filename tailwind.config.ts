import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#f6f6e9",
        primary: "#3d81a8", //our main blue
        secondary: "#a89a64",
        heading: "#f8e894",
        yellow: "#fff4c3",
        primaryHover: "#346e8f", //our main blue but darker
        primaryBlueLight: "#7eb1cd",
        primaryText: "#cfcfcf", //grayish text
        blackColor: "#272727",
        navWhite: "#f4f4f4",
        bgblue: "#d9f0f8",
      },
      gradientColorStops: {
        primaryBlueStart: "#7eb1cd", //our main blue but lighter
        primaryBlueEnd: "#3d81a8",
        primaryBlueDark: "#254f66",
        yellow: "#fff4c3",
        yellowStart: "#fffbeb",
        yellowEnd: "#ffec99",
        blackStart: "#4b4b4b",
        blackEnd: "#272727",
        bgblue: "#d9f0f8",
        bgbrown: "#ddd5be",
      },
      fontFamily: {
        recoleta: ["Recoleta", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      spacing: {
        sm: "2rem",
        md: "3rem", // Custom margin for medium screens
        lg: "5rem", // Custom margin for large screens
        "2xl": "14rem", // Custom margin for 2xl screens
      },
    },
  },
  plugins: [],
} satisfies Config;
