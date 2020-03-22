const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: 'production',
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
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 8192
                    }
                  }
                ]
            },
            {
                test: /\.(png|jpg|gif|svg|woff|woff2|eot|otf|ttf)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {}
                  }
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ],
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('zswui.css'),
        new UglifyJsPlugin(),
        new OptimizeCSSAssetsPlugin({
            assetNameRegExp: /\.css\.*(?!.*map)/g,  //注意不要写成 /\.css$/g
            cssProcessor: require('cssnano'), // cssnano 集成了autoprefixer的功能
            cssProcessorOptions: {
                discardComments: { removeAll: true },// 避免 cssnano 重新计算 z-index
                safe: true,
                autoprefixer: false // 关闭autoprefixer功能
            },
            canPrint: true
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'pro 生产环境',
            template: path.join(__dirname, '../public/index.html')
        })
    ]
}