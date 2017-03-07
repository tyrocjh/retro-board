const webpack = require('webpack');
const path = require('path');
const uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const CopyWebpackPlugin = require('copy-webpack-plugin');

const PATHS = {
  src: path.resolve(__dirname, './src/js'),
  images: path.resolve(__dirname, './src/images'),
  build: path.resolve(__dirname, './build')
}

module.exports = {
  entry: {
    bundle: path.resolve(PATHS.src, 'index.jsx')
  },
  output: {
    path: PATHS.build,
    filename: 'js/[name].js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      { 
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.scss$/,
        loader: 'style!css?localIdentName=[name]--[local]--[hash:base64:5]!sass'
      },
      {
        test: /\.(ttf|eot|svg|woff|woff2)/,
        loader: 'url?limit=8192'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=8192'
      }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
    }),
    new uglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new CopyWebpackPlugin([
      { from: './src/index-prod.html', to: 'index.html' },
      { from: PATHS.images, to: 'images' }
    ])
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss'],
  },
  devtool: 'source-map'
};
