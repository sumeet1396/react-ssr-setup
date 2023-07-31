const path = require('path');
const dotenv = require('dotenv');
const webpackNodeExternals = require('webpack-node-externals');

const envPath = path.resolve(__dirname, '.env'); 
const envVariables = dotenv.config({ path: envPath }).parsed;

const config = {
    mode: envVariables.MODE,
    entry: "./src/Client/client.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname,'public'),
    },
    resolve: {
        modules: [path.resolve(__dirname, "./src"), "node_modules"]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                loader: 'babel-loader',
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"],
                    plugins: [
                        "@babel/plugin-proposal-object-rest-spread",
                        "@babel/plugin-proposal-function-bind"
                    ],
                },
                },
            }
        ]
    },
}

module.exports = config