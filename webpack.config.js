const path = require("path");
const resolve = require("./webpack.config.resolve");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
require("dotenv").config({ silent: true });

module.export = () => {
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
      new ForkTsCheckerWebpackPlugin({ async: false }),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: "src/index.html",
        templateParameters: {
          isStaging: true,
        },
        minify: {
          collapseWhitespace: true,
          processConditionalComments: true,
          minifyJS: mode === "production",
        },
      }),
      new FaviconsWebpackPlugin({
        logo: "./src/assets/favicon/favicon3.ico",
        mode: "webapp",
        devMode: "webapp",
      }),
    ],
    devServer: {
      compress: true,
      port: 3030,
    },
  };
};
