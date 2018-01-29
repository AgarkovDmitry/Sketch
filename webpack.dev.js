const webpack = require('webpack')
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin

module.exports = {
  entry: {
   app: './src/'
  },
  output: {
    filename: '[name].js',
    path: '/dist',
    chunkFilename: '[name].js',
    publicPath: '/dist/'
  },
  module: {
    loaders: [
      { test: /\.(ts|tsx)?$/, loader: 'awesome-typescript-loader', exclude: /node_modules/ },
      { test: /\.s?css$/, use: ['css-loader?modules', 'sass-loader'] },
      { test: /\.(jpg|svg|png|ttf)$/, loader: 'file-loader?&name=images/[hash].[ext]' },
    ]
  },
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  plugins: [
    new CheckerPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    hot: true,
    publicPath: '/dist/'
  },
  devtool: 'source-map',
  watchOptions: {
    poll: true
  }
}