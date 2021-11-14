// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cardBg: "#181818",
        cardHover:"#282828"
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active", "group-focus", "focus"],
      scale: ["group-hover"],
      translate: ["group-hover"],
      stroke: ['hover', 'focus'],
      fill: ['hover', 'focus'],
    },
  },
  plugins: [],
};
