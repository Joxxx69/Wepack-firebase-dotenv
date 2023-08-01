const HtmlWebpack = require('html-webpack-plugin');
const MiniCssExtract = require("mini-css-extract-plugin");
const dotenv = require('dotenv-webpack');


module.exports = {
    mode: "development",
    output: {
        clean:true
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources:false
                }
            },{
                test:/\.css$/,
                exclude: /style.css$/,
                use:['style-loader', 'css-loader']
            },{
                test: /style.css$/,
                use:[MiniCssExtract.loader, 'css-loader']
            },
        ]
    },
    optimization: {
        
    },
    plugins: [
        new HtmlWebpack({
            title: "Mi Webpack App",
            filename: "index.html",
            template:"./src/index.html"
        }),
        new MiniCssExtract({
            filename:'[name].css',
            ignoreOrder: false
        }),
        new dotenv()
    ]
}