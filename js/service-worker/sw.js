console.log(1)

// 

const CACHE_NAME = "APP" + 1;

this.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            cache.addAll([
                './'
            ])
        })
    )
})