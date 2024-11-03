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
        colorMediumGray : "#707070",
        colorMutedGray: "#9b9b9b",
        colorEmeraldTeal: "#54bda3",
        colorNeutralDarkGray: "#393939",
        borderPromptSuggestion: "#ececec",
        chatGptColor: "#10a37f"
      },
      screens: {
        "max-[1560px]": { max: "1560px" },
        "md-1": "950px",
        "ls-1": "455px",
      },
    },
  },
  plugins: [],
};
