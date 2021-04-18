const arr = [1, 2, 3, 4, 5]


const cb = (previousValue, currentValue, index, array) => {
  console.log(previousValue, currentValue, index, array)
  return previousValue + currentValue
}

const sum = arr.reduce(cb, 1)
console.log(sum)
// 如果有初始值 执行array.length - 1 + 1次回调
// 没有初始值 执行array.length - 1次回调