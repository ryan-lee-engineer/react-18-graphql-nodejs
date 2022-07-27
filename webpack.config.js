const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './frontend/index.js',
    output: {
        filename: 'main.bundle.js',
        path: path.resolve(__dirname, './backend/dist'),
    },
    // webpack 5 comes with devServer which loads in development mode
    devServer: {
        host: 'localhost',
        port: 3000,
        historyApiFallback: true,
        open: true
    },
   // Rules of how webpack will take our files, complie & bundle them for the browser 
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /nodeModules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({ template: './backend/dist/index.html' })],
    mode: 'development'
};