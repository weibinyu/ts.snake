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
      //handle ts files
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
      },
      // handle less files
      {
        test: /\.less$/,
        use:[
            "style-loader",
            "css-loader",
            {
              loader: "postcss-loader",
              options: {
                postcssOptions:{
                  plugins: [
                      [
                        "postcss-preset-env",
                        {
                          browsers: 'last 2 versions'
                        }
                      ]
                  ]
                }
              }
            },
            "less-loader"
        ]
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html"
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