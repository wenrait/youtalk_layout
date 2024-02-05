var path = require('path');

const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: path.resolve('./src/js/index.js'),
  output: {
    path: path.resolve(__dirname),
    filename: 'script.js'
  },
  mode: 'development',
  plugins: [new MiniCssExtractPlugin(), new ESLintPlugin({fix: true}), new StylelintPlugin({fix: true})],
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      }
    ]
  }
}
