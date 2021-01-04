const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    environment: {
      arrowFunction: false // 关闭webpack的箭头函数，可选
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: "babel-loader",
            options:{
              presets: [
                [
                  "@babel/preset-env",
                  {
                    "targets":{
                      "chrome": "58",
                      "ie": "11"
                    },
                    "corejs":"3",
                    "useBuiltIns": "usage"
                  }
                ]
              ]
            }
          },
          {
            loader: "ts-loader",

          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title:'TS test'
    }),
  ],
  devtool: "inline-source-map",
  devServer: {
    contentBase: './dist'
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  mode: "development"
};