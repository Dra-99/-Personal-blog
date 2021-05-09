const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
    .BundleAnalyzerPlugin;

module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'https://www.baidu.com'
            }
        }
    },
    configureWebpack: require("./webpack.config")
}