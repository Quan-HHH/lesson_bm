import React, { Component } from 'react';
import CommentInput from './CommentInput'
import CommentList from './CommentList'
class CommentApp extends Component { //CommentApp继承自Component
    render() { //一定要执行这个方法 这是一个接口
        return(
            <div className="wrapper">
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
                <CommentList />
            </div>
        )
    }
    handleSubmitComment(comment) {
        console.log(comment)
    }
}
export default CommentApp;