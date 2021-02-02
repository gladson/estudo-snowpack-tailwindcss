const env = process.env.NODE_ENV;
const production = env === "production";

const productionPlugins = [require("cssnano")];

module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    require("cssnano"),
    ...(production ? [] : productionPlugins),
  ],
};
