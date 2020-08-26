interface Girl {
    name: string; // interface用分号噢
    age: number;
    bust: number;
    waistline?: number; // 冒号前面加一个问号 表示可有可无
    [propname:string]:any; // 属性名是字符串型, 属性值可以是任何类型
    say(): string; //必须有个say方法 返回值必须是string类型
}

interface Teacher extends Girl {
    teach(): string
}

// 接口不仅能限制对象 还能限制类
class XiaoJieJie implements Girl {
    // 这个类必须受到Girl的约束
    name="刘英";
    age=18;
    bust=90;
    say() {
        return '快乐小权冲冲冲'
    }
}

const girl = {
    name: 'dajiao',
    age: 18,
    bust: 94,
    waistline: 58,
    sex: '女',
    say() {
        return '快乐小权冲冲冲'
    },
    teach() {
        return '快乐小权教教教'
    }
}


const screenResume = (girl: Girl) => {
    const {name, age, bust} = girl;
    age < 24 && bust >= 90 && console.log(name+'进入面试')
    age >= 24 && bust < 90 && console.log(name+'你被淘汰')
}

const getResume = (girl: Teacher) => {
    const {name, age, waistline, sex} = girl;
    console.log(name+'年龄是'+age);
    waistline && console.log(name+'腰围是'+waistline);
    sex && console.log(name + '性别是:' + sex);

}

screenResume(girl)
getResume(girl)