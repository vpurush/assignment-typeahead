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
                use: ExtractTextPlugin.extract({
                    use: [
                        'css-loader',
                        'sass-loader'
                    ]
                }),
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
        })
    ]
}