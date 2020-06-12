// 记忆/缓存
// f(10) = 20 缓存{ 10， 20}
// f(10) = 20 没有必要计算了, 缓存里面取

let cache1 = {};
function add10(x) {
    if (cache1[x] !== undefined) return cache1[x];
    let res = x + 10;
    cache1[x] = res;
    return res;
}

function _add10(x) {
    return x + 10;
}

let cache2 = {};
function buildurl(url, obj) {
    let k = url + JSON.stringify(obj);
    if (cache1[k] !== undefined) {
        return cache2[k];
    }
    let parts = []
    for (let key of Object.keys(obj)) {
        parts.push(`${key}=${obj[key]}`)
    }
    res = `${url}?${parts.join('&')}`;
    cache2[k] = res;
    return res;
}
console.log(buildurl('api.com', { a: 1, b: 2 }))
console.log(buildurl('api.com', { a: 1, b: 2 }))

function _buildUrl(url, obj) {
    let parts = []
    for (let key of Object.keys(obj)) {
        parts.push(`${key}=${obj[key]}`)
    }
    return `${url}?${parts.join('&')}`;
}
// 两份代码雷同
// 封装
// 1. 不同的 通过参数传进来 功能不一样
// 2. 公用的 内部  缓存：2.1 let cache  2.2 if() {}  2.3 cache[] = res


function memorize(func) {
    let cache = {};
    if(cache[k] !== undefined) return cache[k];
    // 计算
    let res = func();
    cache[k] = res;
    return res;
}

memorize(_add10);
memorize(_buildUrl);