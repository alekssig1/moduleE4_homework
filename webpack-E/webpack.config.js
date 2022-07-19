const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintWebpackPlugin = require('stylelint-webpack-plugin');
const path = require('path');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const optimization = () => {
    const config = {};
    if (isProd) {
       config.minimizer = [new TerserWebpackPlugin(),
                           new CssMinimizerWebpackPlugin()]
        }
    return config
    }

// const devtoolIsDev =() => {
//     const config1 = {};
// if (isDev) {
//     config1.map = 'inline-source-map';
// }
//     return config1
// }


module.exports = {

    entry: './src/index.js',
    devServer: {
        port: 3000,
        hot: isDev,
        client: {
            overlay: false
        }
    },
 devtool: isDev ? 'inline-source-map': false,

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "main.js"
    },
    plugins: [
              new HtmlWebpackPlugin({
                  template: "./index.html",

              }),
              new MiniCssExtractPlugin(),
        ],

    optimization: optimization(),


    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: true,
                        }
                    }, 'css-loader'
                    ],
            },

        ]
    }
};

if (isDev) {
    const lint =[
        new StylelintWebpackPlugin(),
        new ESLintPlugin()
    ]
    module.exports.plugins.push.apply(module.exports.plugins, lint)
}
