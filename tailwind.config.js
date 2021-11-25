// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cardBg: "#181818",
        cardHover: "#282828",
        activeBg: "#1e1e1e",
        spotifyGreen:"#64d862"
      },
      padding: {
        paddingXl: "21.5rem",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active", "group-focus", "focus"],
      scale: ["group-hover"],
      translate: ["group-hover"],
      stroke: ["hover", "focus"],
      fill: ["hover", "focus"],
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
