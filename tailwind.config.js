module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "orange",
          secondary: "#4348a8",
          accent: "#5c35e8",
          neutral: "#2B232F",
          "base-100": "#343243",
          info: "#8B9FEA",
          success: "#1C9B73",
          warning: "#CC870F",
          error: "#ED5E68",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
  //...
};
