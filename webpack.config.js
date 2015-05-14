//var webpack = require('webpack');
//var ExtractTextPlugin = require("extract-text-webpack-plugin");
var UglifyJsPlugin = require("webpack/lib/optimize/UglifyJsPlugin");
//var config = require('./webpack.config');


module.exports = {
    devtool: 'source-map',

    entry: "./entry.js",

    output: {
        path: './dist',
        filename: 'ApnAPI.js'
        ,
        sourceMapFilename: 'maps/ApnAPI_source.map'
    },

    module: {
        loaders: [
            //{
            //    test: /\.css$/,
            //    loader: "style-loader!css-loader"
            //},
            {
                // I want to uglify with mangling only app files, not thirdparty libs
                test: /\.js$/,
                exclude: /.*\/node_modules\/.*.js/, // excluding .spec files
                loader: "uglify"
            }
            //,
            //{
            //    test: /\.css$/,
            //    loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            //}
            //,
            //{
            //    test: /\.css$/,
            //    loader: ExtractTextPlugin.extract("css?sourceMap")
            //},
        ]
    },

    //'uglify-loader': {
    //    mangle: false
    //},

    plugins: [
        new UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
        //,
        //new ExtractTextPlugin("[name].css")
    ]
};