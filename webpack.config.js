const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./src/scripts/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "./js/bundle.js",
    assetModuleFilename: "assets/[name][ext][query]",
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, `./src/index.html`),
      path: path.resolve(__dirname, "dist"),
      filename: `./index.html`,
      publicPath: "",
    }),

    new CleanWebpackPlugin(),

    new MiniCssExtractPlugin({
      filename: `./style/main.css`,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: `asset/resource`,
      },
    ],
  },
};
