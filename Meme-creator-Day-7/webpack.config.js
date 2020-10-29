/**
 * Environment variables used in this configuration:
 * NODE_ENV
 * CONSTANT_VALUE
 */

const webpack = require('webpack');

// const PurifyCSSPlugin = require('purifycss-webpack');
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
// const CleanWebpackPlugin = require('clean-webpack-pl')


module.exports = {
  context: __dirname,
  entry: {
    general: './src/js/general.js',
    memes: './src/js/meme.js',
  },
  output: {
      path: __dirname + "/dist",
      filename: fileNamePrefix + '[name].js',
     
  },
  
}