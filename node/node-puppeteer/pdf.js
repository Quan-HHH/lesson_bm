// async awaits
const fs = require('fs');
const promise1 = new Promise((resolve, reject) => {
    // 回调
  fs.readFile('./package.json', (err, info) => {
    resolve(info);
  })
})
const promise2 = (info) => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./p.json', info, (err) => {
      if (!err) {
        resolve();
      }
    })
  })
}

// 有些地方会说是异步转同步
// 事实上 只是写起来像同步 执行起来还是异步
// then
promise1.then((info) => {
  // 返回 promise
  return promise2(info);
})
.then(() => {
  // 等着 前面 这个 promise
  console.log('读写完成');
})