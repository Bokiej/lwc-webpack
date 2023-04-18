const path = require('path');

const PATH_DIST = path.resolve(__dirname, 'dist');
const PATH_DIST_ASSETS = path.resolve(__dirname, 'dist/assets');
const PATH_SRC_ASSETS = path.resolve(__dirname, 'src/assets');
const EXCLUDE = /node_modules/;

// PLUGINS
const LwcWebpackPlugin = require('lwc-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: PATH_DIST,
        clean: true
    },
    devServer: {
        port: 3000,
        hot: true,
        open: true
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: PATH_SRC_ASSETS,
                    to: PATH_DIST_ASSETS
                }
            ]
        }),
        new LwcWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: "css-loader", options: { modules: true } }
                ]
            },
            {
                test: /.(png|jpeg|gif|svg)$/,
                type: "asset/resource",
              }
        ]
    }
};