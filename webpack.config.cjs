const path = require('path');
const { UserscriptPlugin } = require("webpack-userscript");
const headers = require('./headers.json');

module.exports = {
    mode: "production",
    entry: "./src/main.js",
    output: {
        filename: "alei.user.js",
        path: __dirname, //output directory = project root
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader",
                        options: {
                            attributes: {
                                title: "style-from-webpack", //adding a title so the stylesheet can be saved from Eric's wrath
                            },
                        },
                    },
                    'css-loader',
                ],
            },
        ],
    },
    plugins: [
        new UserscriptPlugin({
            headers: headers,
        }),
    ],
    //devtool: "source-map",
};