const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

let config = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.js$/,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: [
					'vue-style-loader',
					'css-loader'
				]
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				use: [
					{
						loader: 'file-loader',
						options: {}
					}
				]
			},
			{
				test: /\.(png|jpg|gif|svg)$/i,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8192
						}
					}
				]
			}
		]
	},
	devServer: {
		contentBase: './dist'
	},
	plugins: [
		new VueLoaderPlugin(),
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			title:'test',
			template:'index.html',
			filename:'index.html'
		})
	]
}

module.exports = (env, argv) => {
	console.log(argv.mode)
	if (argv.mode === 'development') {
		config.devtool = 'source-map'
	}
	if (argv.mode === 'production') {

	}
	
	return config
}