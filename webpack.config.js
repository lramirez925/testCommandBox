var path = require("path");
var webpack = require("webpack");
var less  = require("less-loader");

module.exports = {
    entry: {
        vendor:'./src/assets/js/app/vendor.js',
        view1:'./src/assets/js/app/view1.js'
    },
    output: {
        filename:'[name].js',
        path: path.resolve(__dirname ,'src/assets/js/','dist'),
        publicPath:path.resolve(__dirname ,'src/assets/js/','dist')
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            jquery: 'jquery'
        })
    ],
    module: {
        loaders: [
            { 
                test: require.resolve('jquery'), 
                loader: 'expose-loader?jQuery!expose-loader?$' 
            },
            { 
                test: require.resolve('bootstrap3-dialog'), 
                loader: 'expose-loader?BootstrapDialog!expose-loader?$' 
            },
            {
                test: /\.less$/,
                //When using loaders the order matters. It goes from the bottom to the top.
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            {
                test: /\.png$/,
                loader: 'url-loader?name=/img/[name].[ext]&limit=100000'
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?name=/font/[name].[ext]&limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.(ttf|otf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?|(jpg|gif)$/,
                loader: 'file-loader?name=/img/[name].[ext]'
            }
        ]
    }
};