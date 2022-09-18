const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
	module: {
		rules: [{
				test: /\.js$/,
				exclude:/node-modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: [
					MiniCSSExtractPlugin.loader,
					'css-loader'
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: './index.html'
		}),
		new MiniCSSExtractPlugin()
	]
}