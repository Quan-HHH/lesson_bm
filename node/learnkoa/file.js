const fs = require('fs');

fs.readFile('./readme.md', (err, data) => {
    if(err) {
        console.log('error')
    }
    console.log(data);
})

console.log(123)
// 先输出了123, 再输出的data