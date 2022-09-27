const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './my-agora-states-client/src/index.js',
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: 'index.bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: { presets: ['@babel/env', ['@babel/preset-react', { "runtime": "automatic" }]] },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
                exclude: /(node_modules|bower_components)/,
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './my-agora-states-client/public/index.html'
    })]
};