import React, { Component } from 'react';

class CommentInput extends Component {
    constructor() {
        // 构造函数
        super();// 父类的构造函数先执行 使用了constructor()方法一定要super
        this.state = {  //状态
            username: '',
            content: ''
        }
    }
    render() {
        // react jxs中 加{} 这个区域就是js的动态区域
        // 解构的方法 从this.state 解出来username, content
        let {username, content} = this.state;
        return(
            <div className="comment-input">
               <div className="comment-field">
                   <span className="comment-field-name">用户名: </span>
                   <div className="comment-field-input">
                       <input type="text" value = {username} 
                        onChange={this.handleUsernameChange.bind(this)}
                       />
                    </div>
               </div> 
               <div className="comment-field">
                   <span className="comment-field-name">评论内容: </span>
                   <div className="comment-field-input">
                       <textarea value = {content}
                        onChange={this.handleContentChange.bind(this)}
                       ></textarea>
                    </div>
               </div>
               <div className="comment-field-button">
                   <button onClick={this.handleSubmit.bind(this)}>发布</button>
                </div>
            </div>
        )
    }
    handleUsernameChange(event) {
        // console.log(event)
        this.setState({ //Component中的方法
            username: event.target.value
        })
    }
    handleContentChange(event) {
        this.setState({ //Component中的方法
            content: event.target.value
        })
    }
    handleSubmit() {
        const {username, content} = this.state;
        this.props.onSubmit({username, content})
        this.setState({
            content: ''
        })
    }
}

export default CommentInput;