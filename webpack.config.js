'use strict';
var webpack = require('webpack'),
path = require('path');

var PATHS = {
  APP: path.resolve(__dirname + '/app'),
  BOWER: path.resolve(__dirname + '/app/bower_components')
}

module.exports = {
  context: PATHS.APP,
  entry: {
    app: ['webpack/hot/dev-server', './core/bootstrap.js']
  },
  output: {
    path: PATHS.APP,
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      },
      {
        test: /\.js$/,
        loader: 'ng-annotate!babel!jshint',
        exclude: /node_modules|bower_components/
      },
      {
        test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?name=res/[name].[ext]?[hash]'
      },
      {
        test: /\.html$/,
        loader: 'raw'
      },
      {
        test: /\.json/,
        loader: 'json'
      }
    ]
  },
  resolve: {
    root: __dirname,
    extensions: ['','.js']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
