const path = require("path");

module.exports = {
  entry: {
    theme: ["./assets/js/theme.js"],
  },
  output: {
    filename: "js/[name].min.js",
    path: path.resolve(__dirname, "assets"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
