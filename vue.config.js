const path = require('path')
const resolve = dir => path.join(__dirname, dir)
module.exports = {
    // 部署应用时的基本 URL
    baseUrl: './',
    // build时构建文件的目录 构建时传入 --no-clean 可关闭该行为
    outputDir: 'dist',
    // build时放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
    assetsDir: './static',
    // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
    indexPath: 'index.html',
    // 默认在生成的静态资源文件名中包含hash以控制缓存
    filenameHashing: true,
    lintOnSave: false,
    // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
    productionSourceMap: false,
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('_c', resolve('src/components'))
    },
    devServer: {
        proxy: {
            '/api': {
                // 目标 API 地址
                target: 'https://selfapply.chinaums.com/padserver/v3/mer2/',
                // 将主机标头的原点更改为目标URL
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
        port: '8080'
    }
}
