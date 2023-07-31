const path = require('path');
const dotenv = require('dotenv');
const webpackNodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack.base');
const {merge} = require('webpack-merge');

const envPath = path.resolve(__dirname, '.env'); 
const envVariables = dotenv.config({ path: envPath }).parsed;

const config = {
    target: "node",
    mode: envVariables.MODE,
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname,'build'),
    },
    resolve: {
        modules: [path.resolve(__dirname, "./src"), "node_modules"]
    },
    externals: [webpackNodeExternals()]
}

module.exports = merge(baseConfig, config)