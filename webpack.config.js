const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.min.js',
    path: path.resolve(__dirname, 'public')
  },

  devtool: 'source-map',

  watch: true,

  watchOptions: {
    poll: 1000,
    ignored: /node_modules/
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
      }
    ]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({minimize: true, sourceMap: true})
  ]
}