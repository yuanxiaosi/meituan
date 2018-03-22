var webpack = require('webpack');
var path = require('path');
var APP_PATH = path.resolve(__dirname, '../src/static/js');
var readline = require('readline');

var ExtractTextPlugin = require("extract-text-webpack-plugin");
var extractCSS = new ExtractTextPlugin('stylesheets/[name]-one.css');
var extractLESS = new ExtractTextPlugin('stylesheets/[name]-two.css');


var HtmlPlugin = require('./htmlPlugin.js');


module.exports = function (option) {
    var ENV = option.ENV;
    var filename = ENV == 'dev' ? 'entry/[name].js' : 'entry/[name]-[chunkhash].js';
    var chunkFilename = ENV == 'dev' ? 'chunk/[name].js' : 'chunk/[name]-[chunkhash].js';

    return {
        devtool: 'false',
        context: APP_PATH,
        entry: {
            app: './webpack/app/main.js'
        },
        output: {
            filename: filename,
            chunkFilename: chunkFilename,
            publicPath: '/static/'
        },
        module: {
            loaders: [{
                test: /\.(jsx|js)?$/,
                exclude: /node_modules/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['es2015', 'react', 'stage-0']
                }
            }, {
                test: /\.css$/,
                loader: extractCSS.extract("style-loader", "css-loader")
            }, {
                test: /\.less$/,
                loader: extractLESS.extract("style-loader", "css-loader", "less-loader")
            }, {
                test: /\.(png|jpg|jpeg|gif|woff|woff2|eot|ttf|svg|webp)$/,
                loader: "file?name=asset/[hash].[ext]"
            }]
        },
        plugins: [
            new webpack.ProgressPlugin(function (percentage, message) {
                const percent = Math.round(percentage * 100);
                readline.clearLine(process.stderr);
                readline.cursorTo(process.stderr, 0);
                /*process.stderr.clearLine();
                process.stderr.cursorTo(0);*/
                process.stderr.write(percent + '% ' + message);
            }),
            // new webpack.optimize.UglifyJsPlugin({
            //     compress: {
            //         warnings: false
            //     }
            // }),
            new HtmlPlugin({
                app: "app"
            }),
            extractCSS,
            extractLESS,
        ]
    };
}