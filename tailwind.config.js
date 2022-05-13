module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        doctorsPortalTheme: {
          primary: "#a991f7",
          secondary: "#f6d860",
          accent: "#3A4256",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      
      
    ],
  },
  plugins: [require("daisyui")],
}
