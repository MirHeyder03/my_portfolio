/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
      "max-sm": { max: "639px" },
      // => @media (max-width: 639px) { ... }
      "max-smm": { max: "500px" },
      //=> @media (max-width: 500px) { ... }
    },
    extend: {
      colors: {
        "contactBg":"rgb(24, 26, 27)",
        "contactLink":"rgb(152, 143, 129)",
        "contactLinkVisited":"rgb(104, 82, 217)",
        
      },
      backgroundImage: {},
    },
  },
  plugins: [],
};
