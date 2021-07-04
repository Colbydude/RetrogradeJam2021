/* eslint-disable */
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
// const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = {
    entry: ['./client/src/scripts/game.ts'],
    module: {
        rules: [{
            include: path.join(__dirname, '../src'),
            loader: 'ts-loader',
            test: /\.tsx?$|\.jsx?$/,
        }],
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    chunks: 'all',
                    filename: '[name].bundle.js',
                    name: 'vendors',
                    test: /[\\/]node_modules[\\/]/,
                },
            },
        },
    },
    output: {
        chunkFilename: '[name].chunk.js',
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({ gameName: 'Phaser Game', template: 'client/src/index.html' }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'client/src/assets', to: 'assets' },
            ],
        }),
        // new InjectManifest({
        //     swSrc: path.resolve(__dirname, '../pwa/sw.js'),
        //     swDest: 'sw.js',
        // }),
    ],
    resolve: {
        alias: {
            '@shared': path.resolve(__dirname, '../../shared/dist/'),
        },
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
};
