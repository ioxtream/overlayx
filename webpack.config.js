const path = require('path');
const glob = require('glob')

module.exports = {
    entry: {
        ...glob.sync("./src/Components/AlertBox/*.js").reduce((acc, curr) => {
            return {...acc, ["/alertbox/" + path.basename(curr, ".js")]: curr}
        }, {})
    },
    output: {
        libraryTarget: "commonjs",
        filename: '[name].js',
        path: path.resolve(__dirname, 'remote'),
    },
    externals: {
        react: "react"
    },
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
            }
        }, {
            test: /\.css$/,
            use: [
                "style-loader",
                "css-loader",
            ]
        }]
    },
    resolve: {
        extensions: [".js"]
    }
}
