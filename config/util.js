const path = require('path')

/* 项目根目录相关 */
const root   = path.join(__dirname, '..')
const rootTo = t => path.join(root, t)

/* 项目输出目录相关 */
const dist   = rootTo('dist')
const distTo = t => path.join(dist, t)

module.exports = {
    root,           // 项目根目录
    rootTo,         // 返回项目根目录相对路径
    dist,           // 项目输出目录
    distTo,         // 返回项目输出目录相对路径
}
