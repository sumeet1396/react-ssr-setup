const path = require('path');
const dotenv = require('dotenv');
const {merge} = require('webpack-merge');
const baseConfig = require('./webpack.base')

const envPath = path.resolve(__dirname, '.env'); 
const envVariables = dotenv.config({ path: envPath }).parsed;

const config = {
    mode: envVariables.MODE,
    entry: "./src/Client/client.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname,'public'),
    },
}

module.exports = merge(baseConfig, config)