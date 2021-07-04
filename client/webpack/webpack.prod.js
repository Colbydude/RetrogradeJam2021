/* eslint-disable */
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

const prod = {
    mode: 'production',
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    filename: '[name].[contenthash].bundle.js',
                },
            },
        },
    },
    output: {
        chunkFilename: '[name].[contenthash].chunk.js',
        filename: '[name].[contenthash].bundle.js',
    },
    plugins: [
        // @TODO Obfuscation
    ],
};

module.exports = merge(common, prod);
