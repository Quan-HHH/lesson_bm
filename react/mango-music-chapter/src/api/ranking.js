// 模块化 排行榜的所有接口 一个文件干一件事情
import jsonp from './jsonp'; //真正的请求 跨域请求解决方案 来自于腾讯的数据
import { URL, PARAM, OPTION } from './config'
export function getRankingList () {
    const data = Object.assign({}, PARAM, {
        g_tk: 5381,
        uin: 0,
        platform: "h5",
        needNewCode: 1,
        _: new Date().getTime()
    });
    return jsonp(URL.rankingList, data, OPTION);
}

export function getRankingInfo() {

}
