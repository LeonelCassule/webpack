const path =  require('path');
const MiniCssExTractPlugin = require('mini-css-extract-plugin');
const  HtmlwebpackPlugin = require('html-webpack-plugin');
const { prototype } = require('events');

module.exports = {
    entry: './src/index.js',
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    mode: 'development',
    devServer:{
        contentBase:path.resolve(__dirname, '/dist'),
        index: 'index.html',
        port: 9000
    },

    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    MiniCssExTractPlugin.loader, 'css-loader'
                ]
            }
        ]
    },
    plugins:[
        new MiniCssExTractPlugin({
            filename: 'index.css'
        }),
        new HtmlwebpackPlugin({
            filename:'index.html'
        })
    ]

}
