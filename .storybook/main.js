const webpackConfigResolve = require('../webpack.config.resolve');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        extensions: [...config.resolve.extensions, '.ts', '.tsx', '.js', '.png'],
        alias: {
          ...config.resolve.alias,
          ...webpackConfigResolve.alias,
        },
      },
      module: {
        ...config.module,
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
          {
            test: /\.(gif|jpg|png)$/,
            type: 'asset/resource',
          },
          {
            test: /\.(svg)$/,
            use: [{ loader: '@svgr/webpack', options: { dimensions: false } }],
          },
        ],
      },
    };
  },
};
