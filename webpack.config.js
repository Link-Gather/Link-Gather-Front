const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const resolve = require('./webpack.config.resolve');
require('dotenv').config({ silent: true });

module.exports = () => {
  return {
    entry: ['./src/index.tsx'],
    mode: process.env.NODE_ENV || 'development',
    resolve,
    output: {
      path: path.join(__dirname, '/dist'),
      filename: '[name].js',
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: 'ts-loader',
          options: { transpileOnly: true },
        },
        {
          test: /\.css?$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        favicon: 'src/aseets/favicon/favicon3.ico',
      }),
    ],
    devServer: {
      compress: true,
      port: 3030,
      historyApiFallback: true,
    },
  };
};
