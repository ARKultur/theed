const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const path = require('path');
const isProduction = true;

const stylesHandler = 'style-loader';


const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, './public/'),
                    to: path.resolve(__dirname, './dist/public/'),
                },

            ],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/i,
                use: [stylesHandler, 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
    } else {
        config.mode = 'development';
    }
    return config;
};
