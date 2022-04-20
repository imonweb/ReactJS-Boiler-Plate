// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
// const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "main.js",
  },
  target: "web",
  devServer: {
    port: "3000",
    static: ["./public"],
    open: true,
    hot: true,
    liveReload: true,
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts"],
  },
  module: {
    rules: [
       {
        test: /\.(sc|c)ss$/i,
        use: ["style-loader","css-loader", "sass-loader"],
      },
      // {
      //   test: /\.(jpg|jpeg|svg|png|gif)$/,
      //   use:{
      //     loader: 'file-loader',
      //     options: {
      //         name: '[name]_[hash].[ext]',
      //         outputPath: 'images/',
      //         publicPath: 'images/'
      //         }
      //     }
      // },
      {
        test: /\.(gif|png|jpg|jpeg|svg)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
     
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: './src/index.html'
      // template: './src/index.html'
    })
  ],
  //  plugins: [
  //       new CleanWebpackPlugin(),
  //       new MiniCssExtractPlugin({
  //         filename: '[name].css',
  //         chunkFilename: '[id].css',
  //       }),
  //       new HtmlWebpackPlugin({
  //         filename: './index.html',
  //         template: './src/index.html'
  //       }),
  //         new CopyPlugin({
  //         patterns: [
  //           { from: "src/images/", to: "images" },
            
  //   ], }),
           
  //   ],
};