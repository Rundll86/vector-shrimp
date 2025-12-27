const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const Webpackbar = require("webpackbar");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, "dist/front"),
        filename: "app.js",
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader",
            },
            {
                test: /\.css$/,
                use: ["vue-style-loader", "css-loader"],
            },
            {
                test: /\.ts$/,
                use: {
                    loader: "ts-loader",
                    options: {
                        appendTsSuffixTo: [/\.vue$/],
                        transpileOnly: true,
                    },
                },
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    plugins: [
        new VueLoaderPlugin(),
        new Webpackbar({
            name: "VectorShrimp",
            color: "green",
        }),
        new HtmlWebpackPlugin({
            template: "templates/index.html",
            filename: "index.html",
        }),
    ],
    stats: "errors-warnings",
    devServer: {
        static: {
            directory: path.resolve(__dirname, "public"),
        },
        compress: true,
        port: 25565,
        setupExitSignals: false,
        client: {
            logging: "none"
        }
    }
};