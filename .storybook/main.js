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
          app: path.resolve(__dirname, '../src', 'app'),
        },
      },
      module: {
        ...config.module,
        rules: [
          {
            test: /\.tsx?$/,
            loader: 'ts-loader',
          },
          {
            test: /\.(png|jpg|jpeg|gif|webp)$/,
            type: 'asset/resource',
          },
          // NOTE: svg raw data를 가져온다. https://webpack.js.org/guides/asset-modules/
          {
            test: /\.(svg)$/,
            resourceQuery: /source/,
            type: 'asset/source',
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
