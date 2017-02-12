var webpack     = require('webpack');
var path        = require('path')

module.exports = {
  entry: [
    'react-hot-loader/patch',
    // activate HMR for React

    'webpack-dev-server/client?http://localhost:4001',
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint

    'webpack/hot/only-dev-server',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates

    path.join(__dirname, "src/App.tsx")
    // App entry point
  ],
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js",
    publicPath: '/'
  },
  
  resolve: {
    extensions: ['.js', '.tsx', '.ts']
  },
  
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.tsx?$/,
        loaders: ['babel-loader', 'ts-loader']
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  
  externals: {
    "jsdom": "window",
    "cheerio": "window",
    "react/lib/ExecutionEnvironment": true,
    "react/lib/ReactContext": true,
    "react/addons": true
  },
  
  node: {
    fs: "empty"
  },

  devServer: {
    hot: true,
    port: 8080,
    contentBase: path.join(__dirname, "/build"),
    historyApiFallback: true,
    publicPath: "/"
  }
};