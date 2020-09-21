const fs = require('fs');
const { promisify } = require('util')

// fs.readFile('./1.js', (err, content) => {
//     if(!err) {
//         console.log(content);
//         fs.stat('./1.js', (err, stat) => {
//             console.log(stat)
//         })
//     }
// })

let readFilePromise = promisify(fs.readFile)
readFilePromise('./1.js').then(console.log)


// 手写promisify
const promisify1 = (fn) => {
    return function(...args) {
        return new Promise((resolve, reject) => {
            fn(...args, (err, content) => {
                if(!err) {
                    resolve(content);
                }
            })
        })
    }
}

let statFilePromise = promisify1(fs.stat)
statFilePromise('./1.js').then(console.log)

let promisefyReadFile = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, content) => {
            if(!err) {
                resolve(content);
            }
        })
    })
}
