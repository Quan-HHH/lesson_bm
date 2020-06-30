import { observable, action } from 'mobx'
import axios from 'axios';
const LIMIT = 10;
class ArticleStore {
    // 用observable修饰过的变量 就会和state一样 变量修改了 页面就会重新渲染 就变成响应式的属性了
    // @ 装饰器
    LIMIT = LIMIT;
    @observable articles = {
        all: []
    }
    @observable total = 0;
    @action 
    getArticle(tag, offset) {
        axios.get('/articles', {
            params: {
                tag: tag === 'all' ? null : tag,
                offset,
                limit: LIMIT
            }
        })
        .then(res => {
            this.articles[tag] = res.articles;
            this.total = res.articalsCount;
        })
    }
}

export default new ArticleStore();