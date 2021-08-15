module.exports = {
  alias: {
    "~": "./src",
  },
  plugins: [
    /* ... */
    ["./snowpack/plugins/default-layout", { layout: "~/layouts/Main.astro" }],
  ],
};
