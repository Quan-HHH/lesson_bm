const UUID = require('uuid'); //引入第三方库

class Wallet{
    //属性和方法组成
    constructor(){
        //构造函数
        // console.log('欢迎使用支付宝钱包');
        // 1.唯一 id, 不是自增id, 绝对不会重复
        this._id = UUID.v1().replace(/-/g, ''); //js命名规则约定，以下划线开头的变量，私有 (不是通过private声明)
        // 2.创建时间 不能改
        this._createTime = + new Date(); //+ 类型转换
        // 3.余额
        this._balance = 0; //
        // console.log(this.id)
        this._lastModifyTime = new Date();
    }

    getBalance() {
        return this._balance;
    }
    // setBalance() {
    // }
    setLastModifyTime() {
        return this._lastModifyTime;
    }
    increaseBalance(increasedAmount) {//increasedAmount 形参
        console.log(qjxWallet.setLastModifyTime() + '多了' + increasedAmount);
        this._balance += increasedAmount;
    }
    decreaseBalance(decreasedAmount) {
        console.log(qjxWallet.setLastModifyTime() + '少了' + decreasedAmount);
        this._balance -= decreasedAmount;
    }
    getCreateTime() {
        return this._createTime;
    }

    getID() {
        return this._id;
    }

    setID() {
        throw new Error('私有属性_id不能修改')
    }
}

const qjxWallet = new Wallet();//实例化
console.log(qjxWallet.getCreateTime());
console.log('余额为' + qjxWallet.getBalance().toFixed(2))
qjxWallet.increaseBalance(10.0)
qjxWallet.decreaseBalance(8.1)
console.log('余额为' + qjxWallet.getBalance().toFixed(2))
// console.log(qjxWallet.setID())
console.log(qjxWallet._id)   //id是qjxWallet的public属性
// id属性应该是只读 不能修改

// 浮点数相加 js 不精确问题