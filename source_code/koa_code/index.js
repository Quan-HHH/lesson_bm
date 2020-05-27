const MyKoa = require('./lib/application');
const app = new MyKoa();

// app.use((ctx) => {
//     // res.end('hello body')
//     ctx.body = 'hello world';
// })

app.use((req, res) => {
    res.end('hello world!')
})

app.listen(3000, () => {
    console.log('你的应用在3000端口启动')
});