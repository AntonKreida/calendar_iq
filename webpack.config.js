const path  = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './js/bundle.js',
        publicPath: "",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, `./src/index.html`),
            filename: `index.html`,
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: `./css/style.css`
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                        MiniCssExtractPlugin.loader, 
                        "css-loader"
                    ],
            },
            {
                test: /\.scss$/i,
                use: [
                        MiniCssExtractPlugin.loader, 
                        "css-loader", 
                        "sass-loader"
                    ],
            },
            {
                test: /\.(gif|png|jpg|jpeg)$/i,
                use: [{
                    loader: `file-loader`,
                    options: {
                        name: `./img/[name].[ext]`,
                    },
                }],
            },
            {
                test: /\.svg$/i,
                type: 'asset/resource',
            },
        ]    
    }
}