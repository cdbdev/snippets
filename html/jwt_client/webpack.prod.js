const webpack = require('webpack');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');
//const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = Merge(CommonConfig, {
  plugins: [
	// create global constant
	new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })/*,
    // Minify CSS
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),    
	new UglifyJSPlugin()*/
  ]
})