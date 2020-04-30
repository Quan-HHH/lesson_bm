window.onload = function() {
    const tabLinks = document.querySelectorAll('.tabbar a');
    // console.log(tabLinks)
    tabLinks.forEach(function(link) {
        // console.log(link)
        link.addEventListener('click', function(event) {
            event.preventDefault();
            // 点哪个哪个加selected
            // 之前的移除selected
            document.querySelector('.selected').classList.remove('selected');
            this.classList.add('selected')
        }, false)
    })
    // 先拿到swiper的数据
    this.fetch('http://localhost:3000/banner')
        .then(function(data) {
            return data.json()
        }).then(function(data) {
            return console.log(data)
        })
}