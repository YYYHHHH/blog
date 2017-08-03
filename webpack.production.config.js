var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    devtool:'hidden-source-map',
    entry:{
        main:__dirname + '/entry/main.js',
        vendor:'moment'
    },
    output:{
        path:__dirname + '/build',
        filename:'[name].[hash].js',
        publicPath:'./'
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
                test:/\.less$/,
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
        })
    ]
}