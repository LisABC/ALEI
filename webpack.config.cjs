const path = require('path');
const { UserscriptPlugin } = require("webpack-userscript");
const headers = require('./headers.json');

module.exports = {
  mode: "production",
  entry: "./src/main.js",
  output: {
    filename: "alei.user.js",
    path: __dirname, //output directory = project root
  },
  plugins: [
    new UserscriptPlugin({
      headers: headers,
    }),
  ],
  devtool: "source-map",
};