import { observable, action } from 'mobx'
import axios from 'axios';
const LIMIT = 10;
class ArticleStore {
    // 用observerable修饰过的变量 只要变量被修改 页面就会重新渲染
    // @ es中的新语法 装饰器
    LIMIT = LIMIT
    @observable articles = {
        all: []
    }

    @observable total = 0;

    // 繁杂的逻辑 尽量写到store来
    // 行为
    @action
    getArticle(tag, offset = 0) {
        axios.get('/articles',{
            params: {
                tag: tag === 'all' ? null : tag,
                offset,
                limit: LIMIT
            }
        })
        .then(res => {
            // 修改store
            // 不用setState mapDispatch
            this.articles[tag] = res.articles
            this.total = res.articlesCount
        })
    }

}

export default new ArticleStore();