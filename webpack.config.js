var path = require('path');

module.exports = {
    entry: [
        "./src/app.js",
    ],
    devtool:"source-map",
    resolve: {
        modules: [
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, 'node_modules'),
        ],
        alias: {
          'styles' : path.resolve(__dirname,'src/styles'),
          'fonts' : path.resolve(__dirname,'src/fonts')
        }
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                exclude: /node_modules/,
                loader: "file-loader"
            },
            {
                test: /\.(png|gif)$/,
                loader: "file-loader"
                query: {
                  name: "[name].[ext]",
                    outputPath: "/images/"
                }
            },
        ],

    }
};