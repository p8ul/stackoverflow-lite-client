const path = require('path');

module.exports = {
	mode: 'development',
	entry: {
		askquestion: './src/Components/ask',
		answers: './src/Components/questionAnswers',
		signup: './src/Components/signup.js',
		login: './src/Components/login.js',
		questions: './src/Components/questions.js'
	},
	output: {
		path: path.resolve(__dirname, 'public/dist'),
		filename: '[name].bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['babel-preset-env', 'stage-2']
					}
				}
			}
		]
	},
	devtool: 'inline-source-map'
};
