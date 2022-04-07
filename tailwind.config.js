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
        high: "#ECEDEE",
        low: "#99A29E",
        subtle: "#313538",
      },
    },
  },
  plugins: [],
};
