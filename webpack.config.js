var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template : __dirname + '/app/index.html',
	filename : 'index.html',
	inject : 'body'
})

var config = {
	entry : [
		'./app/index.js'
	],

	output : {
		path : __dirname + '/dist',
		filename : 'index_bundle.js'
	},

	devServer : {
		inline : true,
		port : 8080
	},

	module : {
		rules : [
			{
				test : /\.js$/, 
				exclude : '/node_modules/', 
				loader : "babel-loader",
				query: {
					presets: ["@babel/preset-env", "@babel/preset-react"]
            	}
			}
		]
	},

	plugins : [HtmlWebpackPluginConfig]
}

module.exports = config;