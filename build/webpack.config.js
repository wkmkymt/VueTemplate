// Require 
const path = require("path")

// Plugin
const CopyWebpackPlugin = require("copy-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const { VueLoaderPlugin } = require("vue-loader")

// Valiable
const pathes = {
  src: path.resolve(__dirname, "../src"),
  entry: path.resolve(__dirname, "../src/index.js"),
  dist: path.resolve(__dirname, "../dist"),
  public: path.resolve(__dirname, "../public"),
  index: path.resolve(__dirname, "../public/index.html"),
}

// Main
module.exports = {
  mode: "development",
  devtool: "inline-source-map",

  entry: pathes.entry,
  output: {
    path: pathes.dist,
    filename: "bundle.js",
    publicPath: "/"
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        loader: ["vue-style-loader", "css-loader"]
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: pathes.public,
        to: pathes.dist
      }
    ]),
    new VueLoaderPlugin()
  ],

  resolve: {
    modules: ["node_modules"],
    alias: {
      "vue$": "vue/dist/vue.esm.js"
    },
    extensions: [".js", ".vue"]
  },

  devServer: {
    contentBase: pathes.public,
    watchContentBase: true,
    open: true,
  }
}