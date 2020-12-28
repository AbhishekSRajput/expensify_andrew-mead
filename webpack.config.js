const path = require("path");

module.exports = {
	entry: "./src/app.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "public"),
	},
	module: {
		rules: [
			{
				test: /\.s?css$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},

			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env", "@babel/preset-react"],
						plugins: [
							["@babel/plugin-proposal-class-properties", { loose: true }],
						],
					},
				},
			},
		],
	},
	devServer: {
		port: 8080,
		contentBase: path.resolve(__dirname, "public"),
		hot: true,
		historyApiFallback: true,
	},
	devtool: "cheap-module-eval-source-map",
};
