module.exports ={
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
}