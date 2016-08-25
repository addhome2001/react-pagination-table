var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        bundle: [
            'webpack-dev-server/client?http://localhost:8000',
            'webpack/hot/dev-server',
            './example/index.jsx'
        ]
    },
    devServer: {
       host: 'localhost',
       port: 8000,
       contentBase: './example'
    },
	output: {
        path: path.join(__dirname, 'example'),
		filename: 'bundle.js',
	},
    plugins:[new webpack.HotModuleReplacementPlugin()],
	resolveLoader: {
		modulesDirectories: ['node_modules']
	},
	resolve: {
		extensions: ['', '.js', 'jsx']
	},
	module: {
		loaders: [
            {
                test: /\.js[x]?$/,
                exclude: /(node_modules)/,
                loaders: ['babel?cacheDirectory=true']
            }
        ]
  }
};
