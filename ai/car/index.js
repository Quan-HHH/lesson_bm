var fs = require('fs'); //node file system, node自己的模块
var path = require('path'); //路径模块

// fs.readFile('textdd.txt', function(err, data){
//     //读取文件
//     if(err) {
//         console.log(err);
//         return;
//     }
//     console.log(data.toString())
// })

// function getDirFiles(startPath){
//     // 子目录 孙目录 递归
//     // 1. 一个大问题分解成很多小问题
//     // 2. 退出条件 目录下没有子目录了
//     let result = [];
//     // 1. 读取所有文件

//     // process node 全局变量 进程
//     // process.cwd() 返回当前项目的物理路径
//     // console.log(process.cwd(),'-------');

//     // console.log(path.join(
//     //     process.cwd(),startPath
//     //     ),'-------');
//     let files = fs.readdirSync(
//         path.join(
//             process.cwd(),startPath
//             )
//         ); 
//     for(let file of files){
//         // console.log(file);
//         let stats = fs.statSync(
//             path.join(process.cwd(),startPath,file)
//         );
//         if(stats.isFile()){
//             result.push(file);
//         }
//         if(stats.isDirectory()){
//             getDirFiles(path.join(process.cwd(),startPath,file))
//         }
//         // console.log(stats)
//     }
//     return result;
// }
function getDirFiles(startPath) {
    let result = [];
    function finder(parentPath) {
        // console.log(path)
        let files = fs.readdirSync(parentPath);//得到的是一个文件名，需要join加上路径
        if(!files.length) return;
        files.forEach(function(val, index) {
            let fPath = path.join(parentPath, val)
            // console.log(fPath)
            let stats = fs.statSync(fPath);
            if(stats.isDirectory()){
                finder(fPath);
            }
            if(stats.isFile()){
                result.push(fPath);
            }
        })
    }
    finder(
        path.join(process.cwd(),startPath)
    )
    return result;
}
console.log(getDirFiles('src'))