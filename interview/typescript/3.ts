// 面向接口的编程是一切高级编程的开端

interface IUser {
    // 定义接口是用分号隔开噢
    name: string;
    age: number;
}

const getUserInfo = (user: IUser): string => {
    return `name: ${user.name}, age: ${user.age}`
}