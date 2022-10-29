const webpackConfigResolve = require('../webpack.config.resolve');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-scss',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.s[ac]ss$/i,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    });

    return {
      ...config,
      resolve: {
        ...config.resolve,
        extensions: [...config.resolve.extensions, '.png'],
        alias: {
          ...config.resolve.alias,
          ...webpackConfigResolve.alias,
        },
      },
    };
  },
};
