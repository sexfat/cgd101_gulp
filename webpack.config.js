const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const webpack  = require('webpack');



module.exports = {
    entry: { 
         index: './src/js/index.js' , //index chunkname
         about : './src/js/about.js' 
   },               // 入口文件
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    //解決vue jquery 路徑
    resolve: {
        alias: {
           vue: 'vue/dist/vue.js'
        }
    },             // 出口文件
    module: {
        rules: [{
            // 格式
            test: /\.(sass|scss|css)$/,
            //順序是由下到上 sass > css > style
            use: [{
                loader: MiniCssExtractPlugin.loader,
                options: {
                  publicPath: './dist'
                }
              },
                'css-loader',
                'sass-loader'
            ],
        }]

    },              // 處裡對應模組
    plugins: [
         //清理舊的檔案
        new CleanWebpackPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
          }),
        new MiniCssExtractPlugin({
            filename: "css/[name].css" // 產出css
        }),
        new HtmlWebpackPlugin({
            chunks : ['index'],  //選擇注入資源 chunk
            inject  : 'body', //預設<body> js </body>  head or body
            template : './src/index.html',
            //來源
            filename : 'index.html'
            // 目的地
        }),
        new HtmlWebpackPlugin({
            chunks : ['about'],  //選擇注入資源 chunk
            inject  : 'body', //預設<body> js </body>  head or body
            template : './src/about.html',
            //來源
            filename : 'about.html'
            // 目的地
        })

        
    ],              // 對應的插件
    devServer: {
        contentBase: './dist',
        host: 'localhost',
        port: 3200,
        // 指定首頁檔案
        index: 'index.html',
        open: true
    },          // 服務器配置
    mode: 'production'      // 開發模式配置 production 上線   development開發
}