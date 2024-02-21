/* eslint-disable quotes */
const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');
module.exports = {
  // Other webpack configuration options...
  output: {
      chunkFormat: 'jsonp',
  },
};

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'assets', 'scripts'),
    publicPath: 'assets/scripts/'
  },
  devtool: 'eval-source-map', // Add the devtool option here
  //devtool: 'cheap-module-eval-source-map',
  // devServer: {
  //   contentBase: './'
  // }
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new CleanPlugin.CleanWebpackPlugin()
  ]
};