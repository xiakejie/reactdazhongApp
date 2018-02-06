var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.resolve(__dirname, "app"),
  entry: './index.jsx',
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: path.resolve(__dirname, "node_modules"),
        include: path.resolve(__dirname, "app"),
        loader: 'babel-loader',
        options: {
          presets: ['react', 'env']
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
    })
  ],
  output: {
    path: path.resolve(__dirname, "app"),
    publicPath: "/app/",
    filename: 'bundle.js'
  }
};
