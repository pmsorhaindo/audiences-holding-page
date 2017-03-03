const webpack = require('webpack');

const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const globals = {
  __INCLUDE_CSS__: true,
};

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
    }, {
      test: /_shadow\.scss$/,
      loader: 'css!autoprefixer?browsers=last 2 version!sass',
    }, {
      test: /^((?!_shadow\.scss).)*\.scss$/,
      loader:
        'style!css!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded&sourceMap=true&sourceMapContents=true&includePaths[]=./node_modules',
    }, {
      test: /\.css$/,
      loader: 'style!css',
    }, {
      test: /\.(woff2?|svg|ttf|eot)([\?]?.*)$/,
      loader: 'file-loader?name=[name].[ext]',
    }
    ]
  },
  output: {
    filename: 'index.js',
    libraryTarget: 'umd',
    path: 'dist'
  },
  plugins: [
    new StaticSiteGeneratorPlugin(),
    new webpack.DefinePlugin(globals)
  ]
};
