const { addWebpackAlias, override } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    '@components': path.resolve(__dirname, 'src/components/'),
    '@assets': path.resolve(__dirname, 'src/assets/'),
    '@pages': path.resolve(__dirname, 'src/pages'),
    '@layout': path.resolve(__dirname, 'src/layout/'),
    '@utils': path.resolve(__dirname, 'src/utils/'),
    // 添加更多的别名配置
  })
);