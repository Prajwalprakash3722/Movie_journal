module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        blue: {
          light: "#85d7ff",
          DEFAULT: "#1fb6ff",
          dark: "#1E40AF",
        },
        pink: {
          light: "#ff7ce5",
          DEFAULT: "#ff49db",
          dark: "#ff16d1",
        },
        gray: {
          cool: "#616E7C",
          darkest: "#222831",
          dark: "#3c4858",
          DEFAULT: "#c0ccda",
          light: "#e0e6ed",
          lightest: "#E4E7EB",
        },
        green: {
          light: "#abf5d1",
          dark: "#00796b",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
