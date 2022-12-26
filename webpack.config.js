const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const path = require('path');
const webpack = require('webpack');
const isProduction = true;

const stylesHandler = 'style-loader';


const config = {
    
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
        clean: true,
    },
    watchOptions: {
        poll: 500,
        ignored: ['**/public', '**/node_modules', '**/.git', '**/dist', '**/.github', '**/cypress', '/app/app'],
    },
    devServer: {
        compress: false,
        host: "0.0.0.0",
        port: 3000,
        allowedHosts: 'all',
        hot: true,
        historyApiFallback: { index: "/", disableDotRule: true },
        static: {
            directory: path.join(__dirname, 'public'),
          },
        client: {
            overlay: {
                errors: true,
                warnings: false,
            },
        }      
      },    
    plugins: [
        new webpack.DefinePlugin({
            PROD: JSON.stringify(process.env.NODE_ENV === 'production'),
            HOST: JSON.stringify('https://arktest.creative-rift.com')
          }),
          new HtmlWebpackPlugin({
            template: path.join(__dirname, "index.html"),
            filename: "index.html",
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
