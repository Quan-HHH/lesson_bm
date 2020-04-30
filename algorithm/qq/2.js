let enc_qq = [6, 3, 1, 7, 5, 8, 9, 2, 4],//加密的QQ号
    qq = [],//真正的QQ号
    head = 0, //头指针
    tail = enc_qq.length;


// console.log(typeof enc_qq); //object 类型，js里面没有独立的数组类型，是对象类型的一种，是可以枚举的对象

while(head < tail){
    qq.push(enc_qq[head]);
    head++;
    enc_qq[tail]=enc_qq[head];
    tail++;
    head++;
}

console.log(qq.join(''));