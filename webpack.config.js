const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


const exec = require('child_process').exec;

const port = process.env.PORT || 3000;

module.exports = () => {
  
  return {
    context: path.join(__dirname, 'src'),
    entry: {
      main: ['@babel/polyfill', './js/index.js', './sass/main.scss']
    },
    externals: {
      "createjs": "createjs"
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[hash].js',
      publicPath: '/',
    },
    optimization: {
      runtimeChunk: true,
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: Infinity,
        minSize: 0,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              // get the name. E.g. node_modules/packageName/not/this/part.js
              // or node_modules/packageName
              const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

              // npm package names are URL-safe, but some servers don't like @ symbols
              return `npm.${packageName.replace('@', '')}`;
            },
          },
        },
      },
    },
    devtool: '',
    performance: {
      hints: false,
      maxEntrypointSize: 244000,
      maxAssetSize: 244000
    },
    module: {
      rules: [
        // First Rule
        {
          test: /\.(js|env)$/,
          exclude: /node_modules/,
          use: ['babel-loader', 'eslint-loader']
        },
        {
          test: /\.s?[ac]ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.css$/,
          use: [
            'css-loader',
            'postcss-loader',
          ],
        },
        {
          test: /\.(png|svg|jpg|gif|svg)$/,
          use: [{
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              useRelativePath: true
            }
          }]
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new CopyWebpackPlugin(
        [
          { from: '../public', to: '../build/public' }
        ]
      ),
      new MiniCssExtractPlugin({
        filename: 'css/[name].css'
      }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html'
      })
    ],
    devServer: {
      host: 'localhost',
      port: port,
      disableHostCheck: true,
      historyApiFallback: true,
      open: true,
      contentBase: path.join(__dirname, 'src'),
      watchContentBase: true,
      compress: true,
      lazy: false,
      hot: true,
      inline: true
    }
  };
};