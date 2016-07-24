var path = require('path')

module.exports = {
    entry: path.resolve(__dirname, 'demo/demo.js'),
    output: {
        path: path.resolve(__dirname, 'demo'),
        filename: "bundle.js"
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
    }
};
