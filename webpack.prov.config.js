const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    bundle: './example/index.jsx',
  },
  output: {
    path: path.join(__dirname, 'docs'),
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        unused: true,
        dead_code: true,
      },
      output: {
        comments: false,
      },
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
  ],
  resolve: {
    extensions: ['.js', 'jsx'],
    modules: ['node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
    ],
  },
};
