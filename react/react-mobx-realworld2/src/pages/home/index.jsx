import React, { Component } from 'react';
import { inject, observer } from 'mobx-react'
import { Pagination } from 'antd'

// 数据都定义在store里面 组件只负责ui
// inject 注入 这个组件要用哪个store的数据 就注入谁 注入完在props上面取就行
// 注入完再observer一下 就行
@inject('articleStore')
@observer 
class Home extends Component {
    componentDidMount() {
        this.props.articleStore.getArticle('all')
    }
    handlePaginationChange = (page) => {
        this.props.articleStore.getArticle('all', page - 1)
    }
    state = {  }
    render() { 
        const { total, LIMIT } = this.props.articleStore
        return ( 
            <div>
                {/* 数据放到这个组件的props上面了 */}
                {this.props.articleStore.articles.all.length}
                <Pagination total={total} pageSize={LIMIT} defaultCurrent={1}
                onChange={this.handlePaginationChange}
                />
            </div>
         );
    }
}
 
export default Home;