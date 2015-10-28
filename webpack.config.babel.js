import path from 'path';

module.exports = {
	cache: true,
	devtool: 'source-map',
	entry: {
	  preload: './target/app.js'
	},
	output: {
		path: path.join(__dirname, 'dist'),
		publicPath: '../dist/',
		filename: '[name].bundle.js',
		chunkFilename: '[id].bundle.js'
	},
	module: {
		loaders: [
			{ test: /\.hbs$/, loader: 'handlebars-loader' }
		]
	},
	plugins: []
};