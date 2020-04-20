// console.log('hello member')
var members = [
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
];
var tbody = document.querySelector('#member tbody');
// 从json数组变成了HTML数组
tbody.innerHTML = members.map(function (member) {
    return "\n        <tr>\n            <td>" + member.id + "</td>\n            <td>" + member.name + "</td>\n            <td><img src=\"" + member.avatar + "\"></td>\n            <td>" + member.phone + "</td>\n            <td>" + member.hometown + "</td>\n        </tr>\n    ";
}).join('');
var form = document.querySelector('form');
console.log(form);
form.addEventListener('submit', function (event) {
    event.preventDefault();
    //获得输入框里面的值
    var id = form.idInput.value;
    // console.log(form.idInput.value)
    var name = form.nameInput.value;
    var avatar = form.avatarInput.value;
    var phone = form.phoneInput.value;
    var hometown = form.hometownInput.value;
    //插入表格
    var tr = document.createElement('tr');
    // div.classList.add('')
    tr.innerHTML = "\n        <td>" + id + "</td>\n        <td>" + name + "</td>\n        <td><img src=\"" + avatar + "\"></td>\n        <td>" + phone + "</td>\n        <td>" + hometown + "</td>\n    ";
    // const tbody = document.querySelector('#member tbody');
    tbody.appendChild(tr);
});
