let arr1 = [1,2,3], arr2 = [2,3,4];
function combineArr(arr1, arr2) {
  // return arr1.concat(arr2)

  // for(item of arr2) {
  //   arr1.push(item)
  // }
  // return arr1

  arr1.push.apply(arr1, arr2)
  return arr1
}
console.log(combineArr(arr1, arr2))

Object.prototype.age = 12
let obj = {
  'name': 'hhh'
}
for(item in obj) {
  console.log(item)
}
