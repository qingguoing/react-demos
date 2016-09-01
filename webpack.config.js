var path = require('path')

module.exports = {
    output: {
        filename: "./[name]/bundle.js"
    },
    entry: {
        demo1: "./demo1/demo.js",
        demo2: "./demo2/demo.js",
        demo3: "./demo3/demo.js",
        demo4: "./demo4/demo.js",
        demo5: "./demo5/demo.js",
        demo6: "./demo6/demo.js",
        modal: "./modal/demo.js",
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loaders: ["style", "css", "sass"]
            }
        ]
    },
    webserver: {
        hot: true
    },
};
