const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');

module.exports = Merge(CommonConfig, {
  devServer: {
	port: 8100,
    host: 'localhost',
    historyApiFallback: true,
    noInfo: false
  }
})