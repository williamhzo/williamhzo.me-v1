module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      serif: ["Lusitana", "serif"],
    },
    extend: {
      colors: {
        background: "#151718",
        "high-contrast": "#ECEDEE",
        contrast: "#9BA1A5",
        // "low-contrast": "#99A29E",
        // "low-contrast": "#777F84",
        "low-contrast": "#687176",
        "lowest-contrast": "#4C5155",
        subtle: "#313538",
      },
    },
  },
  plugins: [],
};
