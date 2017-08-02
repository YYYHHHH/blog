var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    devtool:'cheap-module-eval-source-map',
    entry:{
        main:__dirname + '/app/main.js',
        vendor:'moment'
    },
    output:{
        path:__dirname + '/build',
        filename:'[name].[id].js',
        publicPath:'/build/'
    },
    devServer:{
        inline:true,
        hot:true,
        port:8080,
        open:true,
        openPage:''
    },
    module:{
        loaders:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader:'babel-loader',
                query:{
                    presets:['es2015','stage-0']
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
        })
    ]
}