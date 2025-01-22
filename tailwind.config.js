/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        host: ["Host Grotesk", "serif"],
        gothic: ["Special Gothic", "sans-serif"],
      },
      colors: {
        black: "#000000",
        white: "#FFFFFF",
        yellow: "#FFFC40",
      },
      height: {
        navbar_mob: "69px",
        navbar_tab: "76px",
        navbar_desk: "82px",
      },
      lineHeight: {
        5.5: "1.375rem",
        12: "3rem",
      },
      fontSize: {
        "3xs": "0.5rem",
        "2xs": "0.625rem",
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
      },
      screens: {
        xsm: "450px",
      },
    },
  },
  plugins: [],
};
