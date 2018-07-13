const path = require('path');
const webpack = require('webpack');

// PLUGINS

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// METADATA

const METADATA = {
    title: 'Test Boilerplate',
    author: 'Apostol Tudor',
    description: 'Lorem Ipsum'
}

// CONFIG

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: [
        path.join(process.cwd(), 'src/main.tsx'),
        // 'font-awesome/scss/font-awesome.scss'
    ],
    output: {
        path: path.resolve('dist'),
        filename: '[name].[chunkhash].js'
    },
    resolve: {
        extensions: ['.js', '.json', '.ts', '.tsx']
    },
    devServer: {
        stats: 'minimal'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: METADATA.title,
            author: METADATA.author,
            template: path.join(process.cwd(), 'src/index.ejs'),
            inject: 'body'
        }),

        new ExtractTextPlugin('style.css')
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
            },
            {
                test: /font-awesome\.config\.js/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'font-awesome-loader' }
                ]
            }
        ]
    }
}