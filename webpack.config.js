const webpack = require('webpack');

module.exports = {
	context: __dirname + "/src",
	devtool: "inline-sourcemap",
	entry: "./js/client.js",
	resolve: {
		modules: ['node_modules', 'src'],
		extensions: ['.js', '.jsx', '.css']
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: "babel-loader",
				query: {
					presets: ['react', 'es2015']
				}
			}
		]
	},
	devServer: {
      	historyApiFallback: true,
		hot: true,
		inline: true,
		port: 3001
	},
	output: {
		path: __dirname + "/src/",
		filename: "client.min.js"
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin()
	]
}