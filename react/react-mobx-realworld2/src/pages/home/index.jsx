import React, { Component } from 'react';
import { inject, observer } from 'mobx-react'

// inject 注入 这个组件要用哪个store的数据 就注入谁 注入完在props上面取就行
// 注入完再observer一下 就行
@inject('articleStore')
@observer 
class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                {/* 数据放到这个组件的props上面了 */}
                {this.props.articleStore.articles.all.length}
            </div>
         );
    }
}
 
export default Home;