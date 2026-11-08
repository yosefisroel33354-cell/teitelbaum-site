import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#07090E",
        midnight: "#0D1322",
        navycard: "#11182B",
        gold: {
          DEFAULT: "#C8A45D",
          light: "#E5CA8F",
          muted: "#8D713B"
        },
        ivory: "#F5F0E6",
        champagne: "#E6DEC8",
        silver: "#94A0B8"
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Frank Ruhl Libre"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
        hebrew: ['"Frank Ruhl Libre"', '"Cormorant Garamond"', "serif"]
      }
    }
  },
  plugins: []
};
export default config;
