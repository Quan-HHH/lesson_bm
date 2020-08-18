let test = new Promise((resolve, reject) => {
    let random = Math.random()
    if (random > 0.5) {
        resolve('大于0.5')
    } else {
        reject('小于等于0.5')
    }
})

let p = test.then((result) => {
    console.log(1,result)
    return result
}).catch((result) => {
    console.log(2,result)
    return result
}).then((result) => {
    console.log(3,result)
    return result
}).then((result) => {
    console.log('last', result)
})

console.log(111,p)

// let p = new Promise((resolve, reject) => {
//     resolve()
// })
// console.log(p) //不.then()就是Promise {undefined} , .then()就是Promise {pending}