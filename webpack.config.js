const path = require("path");
// 引入html-webpack-plugin插件
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { resolve } = require("dns");
module.exports = {
  mode: "development", // 开发模式（学习/调试用，代码不压缩，有调试信息）
  // 指定入口文件
  entry: "./src/index.ts",

  // 指定打包文件所在的目录
  output: {
    // 指定打包文件目录
    path: path.resolve(__dirname, "dist"),
    //指定打包文件名称
    filename: "bundle.js",
    environment: {
      // 取消箭头函数的使用
      // arrowFunction: false,
    },
  },
  module: {
    // 指定所要使用的规则
    rules: [
      {
        // test指定规则生效的文件
        test: /\.ts$/,
        // 要使用的规则
        use: [
          // 配置babel
          {
            //指定加载器
            loader: "babel-loader",
            // 设置babel
            options: {
              // 设置预定义的环境
              presets: [
                [
                  // 指定环境插件
                  "@babel/preset-env",
                  // 配置信息
                  {
                    targets: {
                      // 兼容到哪个版本的浏览器
                      chrome: "88",
                    },
                    // 指定corejs版本
                    corejs: "3",
                    // 使用corejs的方式 "usage"表示按需加载
                    useBuiltIns: "usage",
                  },
                ],
              ],
            },
          },
          "ts-loader",
        ],
        // 要排除的文件
        exclude: /node_modules/,
      },
    ],
  },
  //   配置webpack插件
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "TypeScript Learning",
    }),
  ],
  // 用来设置模块如何被解析
  resolve: {
    extendsions: [".ts", ".js"],
  },
};
