/* eslint-disable */
// TODO: Remove previous line and work through linting issues at next edit

const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const commonJSConfig = {
  entry: ['./index.js'],
  module: {
    rules: [],
  },
  target: 'web'
};

const rawConfig = Object.assign({}, commonJSConfig, {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bitcore-lib-dash.js',
    library: 'dashcore',
    libraryTarget: 'umd',
  }
})
const uglifiedConfig = Object.assign({}, commonJSConfig, {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bitcore-lib-dash.min.js',
    library: 'dashcore',
    libraryTarget: 'umd',
  },
  plugins: [
    new UglifyJsPlugin()
  ]
})

module.exports = [rawConfig, uglifiedConfig];