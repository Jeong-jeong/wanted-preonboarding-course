const path = require('path')

module.exports = {
  babel: {
    presets: ['@emotion/babel-preset-css-prop'],
  },
  webpack: {
    alias: {
      '@api': path.resolve(__dirname, 'src/api'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@style': path.resolve(__dirname, 'src/style'),
      '@utils': path.resolve(__dirname, 'src/utils'),
    },
  },
}
