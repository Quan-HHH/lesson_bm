const btn = document.getElementById('btn')
btn.addEventListener('click', function () {
    const val = document.getElementById('input').value;
    // 通过 一个Ajax 或 HTTP 请求, 向后端请求数据
    // XMLHttpRequest对象用于在后台与服务器之间交换信息
    const xhr = new XMLHttpRequest();
    // 3个参数
    // 1.请求的方法 get: http规定的一个方法
    // 2.request 的url
    // 3.true 异步   false 同步

    // 请求 处理过程 耗费时间
    // 异步： 不用在这等着 等我拿到资源了 我再回调/通知你  js是单线程，但不阻塞
    // 同步： 你就得在这等着 等我拿到资源了 我才会往下执行

    // get  通过url把数据传给后端
    xhr.open('get',
        `http://neteasecloudmusicapi.zhaoboy.com/search?keywords=${val}`,
        true);
    xhr.onreadystatechange = function () {
        //回调
        console.log(xhr.readyState, xhr.response)
        if (xhr.readyState == 4 && xhr.status === 200) {
            let res = JSON.parse(xhr.response);
            document.getElementById('songs').innerHTML = res.result.songs.map(function (song) {
                // let { artists } = song;
                let artists = song.artists;
                let singer = artists.map(function (artist) {
                    return artist.name
                }).join('/');
                return `
                    <li>
                    ${song.name} 演唱：${singer} 专辑：${song.album.name}
                    </li>
                    `
            }).join('')
        }
    }
    xhr.send();// 发送请求
    console.log(xhr.response)
})