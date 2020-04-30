// console.log('hello member')

// 1. 不能动态更新
// 2. uuid
// 3. ts中 数据不严谨
// 如何让不严谨的数据守规矩？ 接口
interface MembersEntity {
    id: number;
    name: string;
    avatar: string;
    phone: number;
    hometown: string;
}
const members: MembersEntity[] = [
    {
        id: 1010,
        name: '权佳欣',
        avatar: 'https://user-gold-cdn.xitu.io/2019/2/23/169198b85bfbec1d?imageView2/1/w/180/h/180/q/85/format/webp/interlace/1',
        phone: 123,
        hometown: 'jx'
    },
    {
        id: 1010,
        name: '权佳灏',
        avatar: 'https://user-gold-cdn.xitu.io/2019/2/23/169198b85bfbec1d?imageView2/1/w/180/h/180/q/85/format/webp/interlace/1',
        phone: 123,
        hometown: 'jx'
    }

]

const tbody = document.querySelector('#member tbody');
// 从json数组变成了HTML数组
tbody.innerHTML = members.map((member) => {
    return `
        <tr>
            <td>${member.id}</td>
            <td>${member.name}</td>
            <td><img src="${member.avatar}"></td>
            <td>${member.phone}</td>
            <td>${member.hometown}</td>
        </tr>
    `
}).join('');

const form = document.querySelector('form');
console.log(form)

form.addEventListener('submit', function(event) {
    event.preventDefault();
    //获得输入框里面的值
    const id = form.idInput.value;
    // console.log(form.idInput.value)
    const name = form.nameInput.value;
    const avatar = form.avatarInput.value;
    const phone = form.phoneInput.value;
    const hometown = form.hometownInput.value;
    

    //插入表格
    var tr = document.createElement('tr');
    // div.classList.add('')
    tr.innerHTML = `
        <td>${id}</td>
        <td>${name}</td>
        <td><img src="${avatar}"></td>
        <td>${phone}</td>
        <td>${hometown}</td>
    `
    // const tbody = document.querySelector('#member tbody');
    tbody.appendChild(tr);
    
})