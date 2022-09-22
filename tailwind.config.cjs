module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    colors: {
      darkBg: "#183435",
      lightBg: "#a0a9a4",
      yellowBtn: "#a17322",
      textWhite: "#fffafa",
    },
    backgroundImage: (theme) => ({
      "hero-pattern": "url('/img/hero-pattern.svg')",
      "footer-texture": "url('/img/footer-texture.png')",
    }),
  },
  plugins: [],
};
