module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.vue",
    "./components/**/*.vue",
    "./assets/scss/**/*.scss",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    screens: {
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
      "large-desktop": "1440px",
    },
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        sans: ["Inter", "sans-serif", "system-ui"],
        title: ["Visby", "sans-serif", "system-ui"],
      },
      colors: {
        primary: {
          light: "#919bff",
          DEFAULT: "#133a94",
          dark: "#0a2a75",
        },
        "gray-light": "#F6F6F6",
        dark: "#171E26",
        "blue-green": "#57ebde",
        green: "#aefb2a",
      },
      ringOffsetWidth: {
        3: "3px",
      },
    },
  },
  plugins: [],
};
