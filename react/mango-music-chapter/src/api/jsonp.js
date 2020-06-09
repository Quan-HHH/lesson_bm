// 跨域请求 使命是对跨域请求的抽象封装
// 服务于ranking.js recommend.js
import originJsonp from 'jsonp'

let jsonp = (url, data, option) => {
    return new Promise((resolve, reject) => {
        console.log(buildUrl(url, data), '-----------')
        originJsonp(buildUrl(url, data), option, (err, data) => {
            if(!err) {
                resolve(data);
            } else {
                reject(err);
            }
        })
    });
}

function buildUrl(url, data) {
    let params = [];
    for (var k in data) {
        params.push(`${k}=${data[k]}`);
    }
    let param = params.join("&");
    if (url.indexOf("?") === -1) {
        url += "?" + param;
    } else {
        url += "&" + param;
    }
    return url;
  }

export default jsonp;