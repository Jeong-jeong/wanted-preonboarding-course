const path = require('path')
const customWebpackConfig = require('../craco.config.js')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
  ],
  framework: '@storybook/react',
  webpackFinal: async (config) => {
    const { webpack } = customWebpackConfig

    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          ...webpack.alias,
          // '@emotion/react': toPath('node_modules/@emotion/react'),
          // '@emotion/styled': toPath('node_modules/@emotion/styled'),
        },
      },
    }
  },
}
