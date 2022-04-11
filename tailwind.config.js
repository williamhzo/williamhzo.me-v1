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
      keyframes: {
        "slide-down": {
          from: { height: 0, opacity: 0 },
          to: { height: "var(--radix-accordion-content-height)", opacity: 1 },
        },
        "slide-up": {
          from: { height: "var(--radix-accordion-content-height)", opacity: 1 },
          to: { height: 0, opacity: 0 },
        },
      },
      animation: {
        "slide-up": "slide-up 0.3s ease-in-out",
        "slide-down": "slide-down 0.3s ease-in-out",
      },
    },
  },
  plugins: [require("tailwindcss-radix")()],
};
