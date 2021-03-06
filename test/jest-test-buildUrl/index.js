const {add, minus} = require('./math') //解构赋值 导入进来的同时
// const math = require('./math')

// let result = add(3, 7);
// let expected = 10;
// if (result !== expected) {
//     throw new Error('3 + 7 = 10')
// }

// let result1 = add(3, 7);
// let expected1 = -4;
// if (result1 !== expected1) {
//     throw new Error('3 + 7 = -4')
// }

function expect(result) {
    return {
        toBe: function(value) {
            if(result !== value) {
                throw new Error('预期值与真实值不一样')
            }
        }
    }
}

function test(desc, fn) {
    // fn 有没有抛出错误
    try {
        fn();
        console.log(`${desc}通过`)
    } catch(err) {
        console.log(`${desc}不通过`)

    }
}
test('测试加法', () => {
    expect(add(3, 7)).toBe(10)
})
test('测试减法', () => {
    expect(minus(3, 7)).toBe(-4)
})

// expect(minus(3, 7)).toBe(-4)
// expect(add(3, 7)).toBe(10)