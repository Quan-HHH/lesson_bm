// 装饰class的时候 能够拿到这个class target就相当于Com这个类了
// 装饰器可以装饰三个东西 装饰类 装饰类里的属性 方法
function observer(target) {
    // 给Com这个类 加一个静态属性
    target.displayName = 'XXX';
    return target; // 引用类型 return不return没什么关系
}

@observer
class Com {
    render() {
        return '123'
    }
}

console.log(Com.displayName)