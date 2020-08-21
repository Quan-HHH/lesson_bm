interface IUser {
    // 定义接口是用分号隔开噢
    name: string;
    age: number;
}

type IUserInfoFunc = (user: IUser) => string;
const getUserInfo: IUserInfoFunc = (user) => {
    return `name: ${user.name}, age: ${user.age}`
}