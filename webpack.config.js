const currentTask = process.env.npm_lifecycle_event;
const path = require('path');
const MiniExtractCssPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

const config = {
	entry: './src/app.js',
	output: {
		filename: 'bundle.[hash].js',
		path: path.resolve(__dirname, 'public'),
	},
	mode: 'development',
	plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
	module: {
		rules: [
			{
				test: /\.s?css$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},

			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
						plugins: [['@babel/plugin-proposal-class-properties']],
					},
				},
			},
		],
	},
	devServer: {
		port: 8080,
		contentBase: path.resolve(__dirname, 'public'),
		hot: true,
		historyApiFallback: true,
	},
	devtool: 'cheap-module-eval-source-map',
};

if (currentTask == 'build') {
	config.mode = 'production';
	config.module.rules[0].use[0] = MiniExtractCssPlugin.loader;
	config.plugins.push(
		new MiniExtractCssPlugin({ filename: 'styles.[hash].css' }),
		new CleanWebpackPlugin(),
		new WebpackManifestPlugin()
	);
	config.devtool = 'source-map';
}

module.exports = config;
