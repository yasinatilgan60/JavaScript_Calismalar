const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');
module.exports = {
    entry: ['babel-polyfill','./src/js/index.js'], // babel-polyfill asenkron işlemler için kullanıldı. 
    output: {
        path: path.resolve(__dirname,'./dist'),
        filename: 'js/bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
          { 
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
          }
        ]
      }
}
// contentBase ile devServer'ın hangi klasör içinde çalışacağı belirtilmiştir.
