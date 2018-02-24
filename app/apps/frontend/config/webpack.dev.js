const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    output: {
        path: path.resolve('./build/dev/'),
        filename: "[name]-dev-[hash].js"
    },
    resolve: {
        alias: {vue: 'vue/dist/vue'}
    },
});