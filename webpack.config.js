'use strict';

let path = require('path'),
    webpack = require('webpack');

module.exports = {
   context: __dirname,
   entry: [
      'babel-polyfill',
      './client/app/app.js'
   ],
   devtools: 'source-map',
   output: {
      //publicPath: '/',
      path: path.resolve(__dirname, './client/dist'),
      publicPath: 'http://localhost:3000/assets/[hash]',
      filename: 'bundle.js'
   },
   module: {
      preLoaders: [
         {
            test: /\.js$/,
            exclude: /node_modules/, // exclude any and all files in the node_modules folder
            loader: 'jshint-loader'
         }
      ],
      loaders: [
         {
            test: /\.js$/,
            loader: 'babel',
            exclude: [
               path.resolve(__dirname, 'node_modules')
            ],
            query: {
               presets: ['es2015', 'stage-0']
            }
         },
         {test: /\.html$/, loader: 'html', exclude: /node_modules/},
         {test: /\.css$/,  loader: 'style!css', exclude: /node_modules/},
         {test: /\.styl$/, loader: 'style!css!stylus', exclude: /node_modules/},
         {test: /\.(jpe?g|png|gif|svg)$/i, loader:'url'}
      ]
   },
   plugins: [
      //new webpack.optimize.CommonsChunkPlugin('common.js')
   ],
   externals: {
      angular: true
   }
};