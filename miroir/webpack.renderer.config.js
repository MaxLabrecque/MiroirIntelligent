const rules = require('./webpack.rules');
const path = require('path');

rules.push({
  test: /\.css$/,
  use: [
    {loader: 'style-loader'},
    {loader: 'css-loader'},
    {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          plugins: [require('tailwindcss'), require('autoprefixer')],
        },
      },
    },
  ],
});

module.exports = {
  // Put your normal webpack config below here
  module: {
    rules,
  },
  resolve: {
    alias: {
      react: path.resolve('./node_modules/react'),
    },
  },
  devtool: 'source-map',
};
