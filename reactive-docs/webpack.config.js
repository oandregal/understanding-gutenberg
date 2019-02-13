const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
	mode: NODE_ENV,
	entry: './editor.js',
	output: {
		path: __dirname,
		filename: './assets/editor.js',
	},
	module: {
		rules: [
			{
				test: /.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
		],
	},
};
