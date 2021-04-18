// 计算对象中每个元素出现的次数
let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

let nameNum = names.reduce((prev, cur) => {
  if(cur in prev) {
    prev[cur] ++
  } else {
    prev[cur] = 1
  }
  return prev
}, {})

console.log(nameNum)

// 数组去重
let arr = [1,2,3,4,4,1]
let newArr = arr.reduce((pre, cur) => {
  if(pre.includes(cur)) {
    return pre
  } else {
    return pre.concat(cur)
  }
}, [])
console.log(newArr)
