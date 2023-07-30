const path = require('path');
const dotenv = require('dotenv');

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
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                loader: 'babel-loader',
                options: {
                    // presets: [
                    //     'react', //for handling react code
                    //     'stage-0', // for handling async code
                    //     ['env', { targets: { browsers: ['last 2 versions'] } }] //code to work on latest 2 versions of all browsers
                    // ],
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
    externals: {
        express: 'express',
    },
}

module.exports = config