const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')

var publicPath = '/build/';

module.exports = {
	entry: './src/main.ts',
	output: {
		path: path.join(__dirname, publicPath),
		filename: 'bundle.js',
		publicPath: publicPath
	},	
	module: { 
		rules: [
			{ 
				test: /\.ts$/, 
				exclude: /node_modules/, 
				use: { 
					loader: 'ts-loader',
					options: {
					   // append a ".ts" file to all ".vue" file thus typescript can preprocess the file
					   appendTsSuffixTo: [/\.vue$/]
					}
				} 
			},
			{ 
				test: /\.vue$/, 
				use: { 
					loader: 'vue-loader' ,
					options: {
						esModule: true
					}
				} 
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			}
		] 
    },
	resolve: {
		extensions: ['.ts', '.vue', '.js', '.css'],
		alias: {
			vue: 'vue/dist/vue.min.js'
		}
	},
	plugins: [
		// make sure to include the plugin for the magic
		new VueLoaderPlugin()
    ]
};