const path = require('path');
const lessPlugin = require("craco-less");
const CracoCSSModules = require('craco-css-modules')
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = {
  webpack: {
    alias: {
      '@/components': path.resolve(__dirname, 'src/components'),
      '@/assets': path.resolve(__dirname, 'src/assets'),
      '@/pages': path.resolve(__dirname, 'src/pages'),
      '@/layout': path.resolve(__dirname, 'src/layout'),
      '@/utils': path.resolve(__dirname, 'src/utils'),
      '@/modules': path.resolve(__dirname, 'src/modules'),
    },
    plugins: [
      new MonacoWebpackPlugin({languages: ['css', 'typescript', 'javascript']})
    ]
  },
  plugins: [
    {
      plugin: lessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            // antd 主题之类的配置
            // modifyVars: { "@primary-color": "#1DA57A" },
            javascriptEnabled: true
          }
        }
      }
    },
    {
      plugin: CracoCSSModules
    },
  ],
};