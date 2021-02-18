const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    devtool: 'inline-source-map',
    module:{
        rules:[
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {importLoaders: 1}
                    },
                    'postcss-loader'
                ]
            },
            {
                test: /\.(svg|eot|woff|woff2|ttf)$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'fonts'
                }
            }
        ]
    }
}