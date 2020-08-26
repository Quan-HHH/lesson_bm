interface Girl {
    name: string; // interface用分号噢
    age: number;
    bust: number;
    waistline?: number; // 冒号前面加一个问号 表示可有可无
}

const girl = {
    name: 'dajiao',
    age: 18,
    bust: 94,
    waistline: 58
}


const screenResume = (girl: Girl) => {
    const {name, age, bust} = girl;
    age < 24 && bust >= 90 && console.log(name+'进入面试')
    age >= 24 && bust < 90 && console.log(name+'你被淘汰')
}

const getResume = (girl: Girl) => {
    const {name, age, waistline} = girl;
    console.log(name+'年龄是'+age);
    girl.waistline && console.log(name+'腰围是'+waistline);
}

screenResume(girl)
getResume(girl)