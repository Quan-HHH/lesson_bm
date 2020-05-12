const process = require('process')
const axios = require('axios')
const inquirer = require('inquirer')
const http = require('http')
const fs = require('fs')
process.title = 'node music'

// console.log(process.argv)

// 异步 立马不会请求回来
function request() {
    let keywords = process.argv[2]
    return axios({
        method: 'GET',
        url: 'http://neteasecloudmusicapi.zhaoboy.com/search',
        params: {
            keywords
        }
    })
        .then(res => {
            // console.log(res);
            // promise then回调里面 返回内容 在后面接着链式调用 then 就可以继续取到返回的内容
            return res.data;
        })
}
function choose(songs) {
    // inquirer 要求每项都是name和value
    return inquirer.prompt([
        {
            type: "list",
            name: "songs",
            message: `共有${songs.length}首, 请回车选择`,
            choices: songs.map(song => {
                return {
                    name: song.name,
                    value: song.id
                }
            })
        }
    ])
    .then(c => {
        const id = c.songs;
        return id;
    })
}
request()
    .then(res => {
        console.log(res)
        return choose(res.result.songs)
    })
    .then(id => {
        axios({
            url: 'http://neteasecloudmusicapi.zhaoboy.com/song/url',
            params: {
                id
            }
        })
        .then(res => {
            let url = res.data.data[0].url;
            return url
        })
        .then(url => {
            if(!url){
                console.log('没有找到这首歌');
                return 
            }
            console.log('获取到歌曲', url, '开始下载')
            http.get(url, (res) => {
                res.pipe(fs.createWriteStream(`./${id}.mp3`))
                res.on('end', () => {
                    console.log('下载完毕')
                })
            })
        })
    })
