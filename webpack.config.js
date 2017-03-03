const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const globals = {
  __INCLUDE_CSS__: true,
};

module.exports = {
  entry: './index.js',
  module: {
    loaders: [
    {
      loader: ['style-loader', 'css-loader', 'sass-loader'],
      test:  /\.scss$/
    }, {
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      query: {
        presets: [
          'es2015',
          'react',
        ]
      },
      test: /\.js$/
    }
    ]
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './template.ejs',
      title: 'Audiences Holding Page'
    }),
    new webpack.DefinePlugin(globals)
  ]
};
