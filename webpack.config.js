const { resolve }  = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './lib/index.jsx',
  externals: {
      'CCEverywhere': 'amd CCEverywhere',
    },
  resolve: {
      extensions: ['.js', '.jsx']
  },
  module: {
      rules: [{
        test: /\.(js|jsx)$/,
        exclude: (/node_modules/),
        loader: 'babel-loader',
          },
      ]
  },
  output: {
    filename: 'ccemodal.bundle.js',
    libraryTarget: 'umd',
    // prevent error: `Uncaught ReferenceError: self is not define`
    globalObject: 'this',
  },
};
