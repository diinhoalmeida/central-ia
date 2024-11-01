/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    extend: {
      colors: {
        colorSoftGray: "#f9f9f9",
        colorBaseWhite: "#ffffff",
        colorNeutralDark: "#42585c",
        colorLightGray : "#cbcbcc",
        colorMutedGray: "#9b9b9b",
        colorEmeraldTeal: "#54bda3",
        colorNeutralDarkGray: "#393939",
      },
    },
  },
  plugins: [],
};
