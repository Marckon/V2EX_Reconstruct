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
    devServer: {
        contentBase: path.resolve(__dirname, '..'),
        publicPath: '/dist'
    },
    module:{
      rules:[
          {
              test:/\.js$/,
              exclude: path.resolve(__dirname,'node_modules'),
              use:{
                  loader: "babel-loader"
              }
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