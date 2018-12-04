const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
	context: path.resolve(__dirname, 'resources'),
	devtool: "source-map",
	performance: { hints: false },
	entry: ['./js/app.js', './sass/app.scss', './sass/global.scss'],
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'js/app.js',
		publicPath: '../'
	},

	module: {
		rules: [
			{
			test: /\.js/,
			use: [{
					loader: "babel-loader",
					options: { presets: ["env"]}
				}]
			},
			{
				test: /\.(sass|scss)$/,
				include: path.resolve(__dirname, 'resources/sass'),
				use: ExtractTextPlugin.extract({
					use: [{
							loader: "css-loader",
							options: {
							sourceMap: true,
							minimize: true,
							url: false
						}
					},
					{
						loader: "sass-loader",
						options: {
							sourceMap: true
						}
					}]
				})
			}
		]
	},

	devServer: {
		publicPath: "/",
		contentBase: "./public",
		host: 'localhost',
		port:  '8080',
		watchContentBase: true,
		compress: true,
		historyApiFallback: {
			index: '/public/index.html',
			contentBase: path.resolve(__dirname, 'public')
		}
	},

	plugins: [
		new ExtractTextPlugin({
			filename: './css/app.css',
			allChunks: true,
		}),
		new BrowserSyncPlugin({
			proxy: 'http://localhost:8080/'
		}),
		new webpack.ProvidePlugin({
	      $: 'jquery',
	      jQuery: 'jquery',
	      'window.jQuery': 'jquery'
	    }),
	]
}