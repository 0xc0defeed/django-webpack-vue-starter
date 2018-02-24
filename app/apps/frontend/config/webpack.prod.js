const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
    output: {
        path: path.resolve('./build/prod/'),
        filename: "[name]-prod-[hash].js"
    },
    resolve: {
        alias: {vue: 'vue/dist/vue.min'}
    },
    plugins: [
        new UglifyJSPlugin()
    ]
});