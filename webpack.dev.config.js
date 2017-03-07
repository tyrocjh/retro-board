const webpack = require('webpack');
const path = require('path');

const PATHS = {
  src: path.resolve(__dirname, './src/js'),
  build: path.resolve(__dirname, 'build')
}

module.exports = {
  entry: [
    'react-hot-loader/patch',
    './src/js/index.jsx'
  ],
  output: {
    path: PATHS.build,
    filename: 'js/bundle.js',
    publicPath: 'http://localhost:8080/build/'
  },
  module: {
    loaders: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'eslint',
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        loaders: [ 'babel' ], 
        exclude: /node_modules/
      },
      { 
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.scss$/,
        loader: 'style!css?sourceMap&modules&importLoaders=1&localIdentName=[name]--[local]--[hash:base64:5]!sass'
      },
      {
        test: /\.(ttf|eot|svg|woff|woff2)$/,
        loader: 'url?limit=10000'
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url?limit=10000'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss'],
  },
  devtool: 'eval'
};
