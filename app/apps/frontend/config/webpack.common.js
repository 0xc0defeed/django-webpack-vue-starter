const BundleTracker = require('webpack-bundle-tracker');

module.exports = {
    context: __dirname,
    entry: '../src/main',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ],
    },
    plugins: [
        new BundleTracker({filename: './config/webpack-stats.json'})
    ]
};