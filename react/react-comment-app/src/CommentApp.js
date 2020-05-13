import React, { Component } from 'react';
import CommentInput from './CommentInput'
import CommentList from './CommentList'
class CommentApp extends Component { //CommentApp继承自Component
    constructor() {
        super();
        this.state = {
            comments: [
                {
                    username: '充电宝',
                    content: '请给我充电'
                }
            ]
        }
    }
    render() { //一定要执行这个方法 这是一个接口 这是必须的 负责页面输出
        const {comments} = this.state;
        return(
            <div className="wrapper">
                {/* onSubmit 这是事件函数吗？ 不是的 这是props */}
                {/* 在组件上 类似于属性的东西 叫 props */}
                {/* state 内部数据  props 外部数据 */}
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
                <CommentList comments={comments} />
            </div>
        )
    }
    handleSubmitComment(comment) {
        // console.log(comment.username, comment.content)
        // let { comments } = this.state;
        // comments.unshift(comment)
        // console.log(comments)
        // this.setState({
        //     comments: comments
        // })
        this.setState({
            comments: [comment, ...this.state.comments]
        })
    }
}
export default CommentApp;