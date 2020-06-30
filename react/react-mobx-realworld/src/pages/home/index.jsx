import React, { Component } from 'react';
import { inject, observer } from 'mobx-react'
import { Pagination } from 'antd'

// inject 注入 想要那个页面的数据 就注入谁 在props上面取
@inject('articleStore')
@observer  // 注入完后再observer一下 就能使用数据了 在props上面取就行
class Home extends Component {
    componentDidMount() {
        this.props.articleStore.getArticle('all');
    }
    handlePaginationChange = (page) => {
        this.props.articleStore.getArticle('all', page - 1);
    }
    render() { 
        const { total, LIMIT } = this.props.articleStore;
        return ( 
            <div>
                { this.props.articleStore.articles.all.length }
                <Pagination total={total} pageSize={LIMIT} defaultCurrent={1}
                onChange={this.handlePaginationChange}/>
            </div>
         );
    }
}
 
export default Home;