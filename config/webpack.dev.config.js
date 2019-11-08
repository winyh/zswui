const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, "../src/index.js"),
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'less-loader']
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, '../public'),
        port: 9000,
        open: true,
        hot: true // HotModuleReplacementPlugin
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('wui.css'),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'dev 开发环境',
            template: path.join(__dirname, '../public/index.html')
        })
    ]
}