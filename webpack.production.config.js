var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var path = require('path');

module.exports = {
    devtool:'hidden-source-map',
    entry:{
        main:__dirname + '/src/entry/main.js',
        vendor:["react", "react-dom", "react-router","react-router-dom"]
    },
    output:{
        path:path.resolve(__dirname, 'build'),
        filename:'[name].[hash].js',
        publicPath:'/'
    },

    module:{
        loaders:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader:'babel-loader',
                query:{
                    presets:['react','es2015','stage-0']
                }
            },
            {
                test:/\.(less|css)$/,
                exclude:/node_modules/,
                loader:'style-loader!css-loader!less-loader'
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(
            ['build/main.*.js','build/manifest.*.js','build/vendor.*.js'],
            {
                root:__dirname,
                verbose:true,
                dry:false
            }
        ),
        new webpack.optimize.CommonsChunkPlugin({
            names:['vendor','manifest']
        }),
        new HtmlWebpackPlugin({
            title:'demo',
            template:'index.html'
        }),
        new UglifyJsPlugin({
            beautify:true,
            exclude:['/node_modules/'],
            compress:{
                warnings:false
            },
            output:{
                comments:false
            }
        }),
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify('production')
            }
        }),
    ]
}