const path = require('path');

const PATH_SRC = 'src';
const PATH_DIST = 'dist';
const PATH_ASSETS = 'assets';
const PATH_SRC_ASSETS =  PATH_SRC + '/' + PATH_ASSETS;
const PATH_DIST_ASSETS = PATH_DIST + '/' + PATH_ASSETS;

// PLUGINS
const LwcWebpackPlugin = require('lwc-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const { NormalModuleReplacementPlugin } = require('webpack'); // use to remove icons
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        synteticShadow: "@lwc/synthetic-shadow", // needed for lightning-base-components
        index: {
            import: './src/index.js',
            filename: 'index.js',
            dependOn: 'synteticShadow'
        }
    },
    output: {
        filename: PATH_ASSETS + '/js/[name].[contenthash].js',
        path: path.resolve(__dirname, PATH_DIST),
        assetModuleFilename: PATH_ASSETS + '/img/[name].[contenthash][ext][query]',
        clean: true
    },
    devServer: {
        port: 3000,
        hot: true,
        open: true
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new BundleAnalyzerPlugin(),
        // // use to remove icons
        // new NormalModuleReplacementPlugin(
        //     new RegExp('.*iconSvgTemplates.*'),
        //     path.resolve(__dirname, 'node_modules/lightning-base-components/src/lightning/iconSvgTemplatesUtility/buildTemplates/utility/up.html')
        // ),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, PATH_SRC_ASSETS),
                    to: path.resolve(__dirname, PATH_DIST_ASSETS)
                },
                {   // needed for lightning-base-components
                    from: './node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css',
                    to: "assets/css/salesforce-lightning-design-system.min.css"
                }
            ]
        }),
        new LwcWebpackPlugin({
            modules: [
                { dir: 'src/modules' },
                { npm: 'lightning-base-components' }
            ]
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                exclude: [
                    /node_modules/,
                    /modules/
                ],
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /.(png|jpeg|gif|svg)$/i,
                type: "asset/resource",
              }
        ]
    }
};