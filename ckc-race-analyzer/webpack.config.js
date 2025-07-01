const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CspHtmlWebpackPlugin = require('csp-html-webpack-plugin');

const nonceValue = 'fixedNonce12345';

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
        '@': path.resolve(__dirname, 'src'),
        assets: path.resolve(__dirname, 'src/assets'), // 👈 Add this
      },
      
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext][query]',
        },
      },
    ],
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      scriptLoading: 'blocking',
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
    new CspHtmlWebpackPlugin({
      'default-src': ["'self'"],
      'script-src': ["'self'", `'nonce-${nonceValue}'`],
      'style-src': ["'self'", `'nonce-${nonceValue}'`],
    }, {
      enabled: true,
      nonceEnabled: {
        'script-src': true,
        'style-src': true,
      },
    }),
  ],
};
