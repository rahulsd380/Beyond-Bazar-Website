/** @type {import('tailwindcss').Config} */
import keepPreset from "keep-react/src/keep-preset.js";
export default {
  darkMode : "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/keep-react/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [keepPreset],

  theme: {
    extend: {},
    fontFamily: {
      lato : ['Lato', 'sans-serif']
    },
  },
  plugins: [require("daisyui")],
}

