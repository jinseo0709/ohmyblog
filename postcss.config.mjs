/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {
      overrideBrowserslist: [
        "> 1%",
        "last 3 versions",
        "ie >= 11",
        "iOS >= 10",
        "Safari >= 10"
      ],
      grid: true
    },
  },
};

export default config;
