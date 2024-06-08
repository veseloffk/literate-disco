const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-env", { targets: "defaults" }],
              ["@babel/preset-typescript"],
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
    alias: {
      src: path.resolve(__dirname, "src/"),
    },
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    hot: true,
    port: 3000,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  mode: "development",
};
