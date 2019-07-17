const path = require('path');
const glob = require("glob");
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ExtractText = require('extract-text-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  performance: {
    hints: false
  },
  entry:  {
    'mainjs': path.join(__dirname, 'deadormonster/static-src/js/index.js'),
    'maincss': path.join(__dirname, 'deadormonster/static-src/sass/main.scss'),
  },
  output: {
    path: path.join(__dirname, 'deadormonster/static'),
    filename: 'js/[name]-[hash].js'
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin({
        verbose: true,
        cleanStaleWebpackAssets: true,
        dry: false
    }),
    new ExtractText({filename: '[name]-[hash].css'}),
    new CopyPlugin([{
        from: path.join(__dirname, 'deadormonster/static-src/js-static'),
        to: 'js/[name].[ext]',
      },{
        from: path.join(__dirname, 'deadormonster/static-src/images-static'),
        to: 'images/[path][name].[ext]',
      }
    ]),
    new ManifestPlugin({fileName: 'webpack-manifest.json'}),
  ],
  module: {
      rules: [
        {
          test: /\.css$/,
          loader: ['style-loader', 'css-loader'],
        },
        {
          test: /\.scss$/,
          use: ExtractText.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
          })
        },
        {
          test: /\.(svg|woff|woff2|ttf|eot|otf)([\?]?.*)$/,
          exclude: [/images/],
          loader: 'file-loader?name=fonts/[name].[ext]',
        },

        {
          test: /\.(svg|jpg|png)?$/,
          exclude: [/fonts/],
          loaders: [
            'file-loader?name=images/i-[hash].[ext]',
          ],
        }
      ],
    },
}
