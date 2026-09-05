const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',

  entry: {
    header: './modules/header/header.js',
    body: './modules/body/body.js',
    footer: './modules/footer/footer.js',
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
  },

  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: 'asset/resource',
      },
    ],
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },

  plugins: [
    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
      title: 'Holberton Dashboard',
    }),
  ],

  devServer: {
    // Dev server serves files from ./public
    port: 8564,
    open: true,
    static: {
      directory: path.resolve(__dirname, 'public'),
    },
  },
};