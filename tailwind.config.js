/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      dark: "#000000",
      white: "#ffffff",
      red: "#C21F3D",
      gray: "#F1F1F1",
    },
    extend: {
      backgroundImage: (theme) => ({
        "glass-1": "url('./imgs/glass_1.png')",
        "glass-2": "url('./imgs/glass_2.png')",
      }),
      fontFamily: {
        hoves: "Hoves",
      },
      fontSize: {
        22: "22px",
      },
    },
  },
  plugins: [],
};
