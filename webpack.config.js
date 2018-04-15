var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    devtool:'cheap-module-eval-source-map',
    entry:{
        main:__dirname + '/src/entry/main.js',
        vendor:["react", "react-dom", "react-router","react-router-dom"]
    },
    output:{
        path: path.resolve(__dirname, 'build'),
        filename:'[name].js',
        publicPath:'/'
    },
    devServer:{
        contentBase: path.join(__dirname, "/"),
        inline:true,
        hot:true,
        port:8080,
        publicPath: '/',
        open:true,
        openPage:'',

        //转发
        proxy: {
            "/": {
                target: "http://127.0.0.1:8081"
            }
        }
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {presets:['react','es2015','stage-0'] }
                }]
            },
            {
                test:/\.(less|css)$/,
                exclude:/node_modules/,
                use:[
                    "style-loader",
                    "css-loader",
                    "less-loader",
                ]
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