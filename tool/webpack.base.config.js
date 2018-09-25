const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, '..', 'src/index.js'),
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, '..', 'src/dist'),
        /*输出library暴露为所有模块定义下均可运行的方式*/
        libraryTarget: "umd"
    },
    devtool: "source-map",
    devServer: {
        contentBase: path.resolve(__dirname, '..', 'src'),
        publicPath: '/dist',
        proxy: {
            '/api': {
                target: 'https://www.v2ex.com/api',
                secure:false,
                changeOrigin:true,
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                use: [
                    {loader: "style-loader"},
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            camelCase: true,
                            importLoaders: 1,
                        }
                    }
                ]
            }
        ]
    },
    externals: {
        react: {
            root: 'React',
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react'
        },
        'react-dom': {
            root: 'ReactDOM',
            commonjs: 'react-dom',
            commonjs2: 'react-dom',
            amd: 'react-dom'
        },
        antd: {
            root: 'antd',
            commonjs: 'antd',
            commonjs2: 'antd',
            amd: 'antd'
        }
    }
};