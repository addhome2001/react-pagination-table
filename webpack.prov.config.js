const path = require('path');
const webpack = require('webpack');

module.exports = {
        entry: {
            "bundle": './example/index.jsx'
        },
        output: {
            path: path.join(__dirname, 'doc'),
      		  filename: 'bundle.js',
      	},
        plugins: [
            new webpack.NoErrorsPlugin(),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('production')
            }),
            new webpack.optimize.UglifyJsPlugin({
              compress: {
                warnings: false
              }
            })
        ],
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
