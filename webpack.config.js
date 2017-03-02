const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

module.exports = {
  entry: './index.js',
  module: {
    loaders: [
    {
      exclude: /(node_modules|bower_components)/,
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
    libraryTarget: 'umd',
    path: 'dist'
  },
  plugins: [
    new StaticSiteGeneratorPlugin()
  ]
};
