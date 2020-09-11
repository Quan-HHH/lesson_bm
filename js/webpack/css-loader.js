// 手写一个loader体会一下loader的功能: 做源文件的解析和转换

module.exports = function(source) {
    console.log(source)
    return `export default \`${source}\``
}

