var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: __dirname + '/src/public/main.ts'
    },
    output: {
        path: path.resolve(__dirname + '/dist'),
        publicPath: '/dist',
        filename: '[name].js',
        // chunkFilename: '[id].[hash].chunk.js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: [
                    {
                        loader: 'awesome-typescript-loader',
                        // loader: 'ts-loader',
                        options: { configFileName: path.resolve(__dirname + '/tsconfig.json') }
                    }, 
                    'angular2-template-loader'
                ]
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                // loaders: [
                //     'to-string-loader',
                //     'css-loader?sourceMap',
                //     'sass-loader?sourceMap'
                // ]
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        'css-loader?sourceMap',
                        'sass-loader?sourceMap'
                    ]
                }),
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(eot|ttf|woff|woff2|otf)$/,
                use: ['file-loader?name=font/[name].[ext]']
            },
            {
                test: /\.(svg|png)$/,
                use: ['file-loader?name=images/[name].[ext]']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/public/index.html'
        }),
        new ExtractTextPlugin("app.css")
    ],
    devtool: 'source-map'
}