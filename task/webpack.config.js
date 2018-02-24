var webpack = require('webpack');
var path = require('path');
var APP_PATH = path.resolve(__dirname, '../src/static/js');
var readline = require('readline');
var HtmlPlugin = require('./htmlPlugin.js');

module.exports = function (option) {
    var ENV = option.ENV;
    var filename = ENV == 'dev' ? 'entry/[name].js' : 'entry/[name]-[chunkhash].js';
    var chunkFilename = ENV == 'dev' ? 'chunk/[name].js' : 'chunk/[name]-[chunkhash].js';

    return {
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
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['es2015', 'react', 'stage-0']
                }
            }, {
                test: /\.css$/,
                loader: "style!css"
            }, {
                test: /\.less$/,
                loader: "style!css!less?relativeUrls"
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
            new HtmlPlugin({
                app: "app"
            })
        ]
    };
}