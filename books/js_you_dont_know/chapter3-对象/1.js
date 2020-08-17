var str = 'asd';  //string 不是String的实例
var str1 = new String('123');  //object 是String的实例

console.log(typeof str, typeof str1, str instanceof String, str1 instanceof String)