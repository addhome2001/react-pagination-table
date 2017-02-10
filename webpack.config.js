const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    bundle: [
      'webpack/hot/dev-server',
      './example/index.jsx',
    ],
  },
  devServer: {
    host: '0.0.0.0',
    port: 8000,
    contentBase: './example',
  },
  output: {
    path: path.join(__dirname, 'example'),
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: false,
      debug: true,
    }),
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
