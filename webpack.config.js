const path = require("path");
const resolve = require("./webpack.config.resolve");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
require("dotenv").config({ silent: true });

module.exports = () => {
  const mode =
    process.env.NODE_ENV === "production" ? "production" : "development";

  return {
    entry: ["./src/index.tsx"],
    mode: "development",
    resolve,
    output: {
      path: path.join(__dirname, "/dist"),
      filename: "[name].js",
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: "ts-loader",
          options: {
            transpileOnly: true,
          },
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: "src/index.html",
        favicon: "src/aseets/favicon/favicon3.ico",
      }),
    ],
    devServer: {
      compress: true,
      port: 3030,
    },
  };
};
