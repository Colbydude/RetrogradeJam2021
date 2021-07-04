/* eslint-disable */
const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    devtool: 'inline-source-map',
    entry: ['./server/src/index.ts'],
    externals: [nodeExternals()],
    mode: 'development',
    module: {
        rules: [{
            include: path.join(__dirname, '../src'),
            loader: 'ts-loader',
            test: /\.tsx?$|\.jsx?$/,
        }],
    },
    node: {
        __dirname: false,
    },
    output: {
        filename: 'server.js',
        path: path.resolve(__dirname, '../dist'),
    },
    resolve: {
        alias: {
            '@shared': path.resolve(__dirname, '../../shared/dist/'),
        },
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    target: 'node',
};
