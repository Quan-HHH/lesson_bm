const ages = [32, 15, 19, 12];
const nums = [];
// 找到所有大于18的数字
ages.forEach(function(currentValue, index, arr) { //空间开销 O(n)
    console.log(currentValue, index, arr)
})
for(let i = 0; i<ages.length;i++){
    if(ages[i] >= 18){
        nums.push(ages[i]);
    }
}
console.log(nums);

// ages.map(function)

// const adultPresent = ages.filter(function(age) {
//     return age >= 18;
// })
// 可简化成为
const adultArr = ages.filter(age => age >= 18);

const adultPresent = ages.some(age => age >= 18);//返回true  有一个满足就会返回true

console.log(adultPresent)
console.log(nums);
// 每一项都满足需求?
const isAlladult = ages.every(age => age >= 19)
console.log(isAlladult)

const adultPresent = ages.every(function(age) {
    return age >= 18;
})
console.log(adultPresent);
