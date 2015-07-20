/*jslint node: true , esnext: true , unused:false , camelcase: false */
'use strict';

var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var nodeModulesDir = path.resolve(__dirname, 'node_modules');

var config = {

    entry: {

        bundle :  [
            'webpack-dev-server/client?http://localhost:3000',
            'webpack/hot/only-dev-server',
            path.resolve(__dirname,'./app/main.js')
        ]
    },

    // entry: {
    // 	app: path.resolve(__dirname, './assets/js/pages/statics/test.js'),
    // 	// vendors: [ 'jquery', 'bootstrap']
    // },
    output: {
        path: path.join(__dirname, 'build'),
        // publicPath: '/assets/', 
        filename: 'js/[name].js'
    },

    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ['react-hot', 'babel-loader'],
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('css!sass')
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=8192'
        }]
    },
    plugins: [
        new ExtractTextPlugin('build/style/style.css', {
            allChunks: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new HtmlwebpackPlugin({
          title: 'webpack lala app',
          filename: './build/index.html'
        }),
        // new webpack.ProvidePlugin({
        //           $: 'jquery',
        //           jQuery: 'jquery',
        //           'window.jQuery': 'jquery',
        //       }),
        // commonsPlugin

    ],
    resolve: {
        root: path.resolve(''),
        extensions: ['', '.js', '.json'],
        // alias: {
        //           jquery:path.resolve(__dirname, './assets/vendor/jquery/dist/jquery.min.js')
        //       },
    },

    // externals: {
    //        // require("jquery") is external and available
    //        //  on the global var jQuery
    //        'jQuery': 'jQuery',
    //    }


};


module.exports = config;