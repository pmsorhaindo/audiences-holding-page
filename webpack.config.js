const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const globals = {
  __INCLUDE_CSS__: true,
};

module.exports = {
  entry: './index.js',
  module: {
    rules: [{
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    }, {
      test: /\.js$/,
      use: [{
        loader: 'babel-loader',
      }]
    }],
  },
  output: {
    filename: 'index.js',
    libraryTarget: 'umd',
    path: 'dist'
  },
  plugins: [
    new StaticSiteGeneratorPlugin({
      globals: {
        self: {
          navigator: {},
          toLowerCase: {}
        },
      }
    }),
    new webpack.DefinePlugin(globals)
  ]
};
