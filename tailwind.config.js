module.exports = {
  important: true,
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
    extend: {
      colors: {
        textColor: "#222",
        textColorLight: "#666",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ff4157",
          secondary: "purple",
          accent: "#5c35e8",
          neutral: "#2B232F",
          // "base-100": "#F7FAFC",
          "base-100": "#FFFFFF",
          info: "#8B9FEA",
          success: "#1C9B73",
          warning: "#CC870F",
          error: "#ED5E68",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
};
