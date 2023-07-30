const path = require('path');

const config = {
    target: "node",
    mode: 'development',
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname,'build'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        'react', //for handling react code
                        'stage-0', // for handling async code
                        '@babel/react',
                        '@babel/es2015',
                        ['env', { targets: { browsers: ['last 2 versions'] } }] //code to work on latest 2 versions of all browsers
                    ],
                },
                },
            }
        ]
    },
}

module.exports = config