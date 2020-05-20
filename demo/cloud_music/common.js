window.onload = function () {
    const tabLinks = document.querySelectorAll('.tabbar a');
    const swiper_wrapper = document.querySelector('.swiper-wrapper');
    // console.log(tabLinks)
    tabLinks.forEach(function (link) {
        // console.log(link)
        link.addEventListener('click', function (event) {
            event.preventDefault();
            // 点哪个哪个加selected
            // 之前的移除selected
            document.querySelector('.selected').classList.remove('selected');
            this.classList.add('selected')
        }, false)
    })
    // 先拿到swiper的数据
    const swiperData = this.fetch('http://localhost:3000/banner')
        .then(function (data) {
            return data.json()
        }).then(function (data) {
            console.log(data.banners[0].imageUrl)
            console.log(data.banners.length)
            for(let i = 0; i < data.banners.length; i++) {
                let banner = document.createElement('div');
                banner.classList.add('swiper-slide');
                let img = document.createElement('img');
                swiper_wrapper.appendChild(banner);
                banner.appendChild(img);
                img.setAttribute('src', data.banners[i].imageUrl)
            }
            })
    //渲染上页面
    


}