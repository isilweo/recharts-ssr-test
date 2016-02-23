module.exports = {
    devtool: 'inline-source-map',
    entry: "./client/client.js",
    output: {
        path: __dirname + '/static',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: "babel" }
        ]
    }
};
