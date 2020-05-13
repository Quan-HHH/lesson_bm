import React, { Component } from 'react';
import Comment from './Comment'

class CommentList extends Component {
    render() {
        // console.log(this.props)
        let { comments } =  this.props;
        return(
            <div>
                {/* {
                    comments.map((comment, i) => {
                        return (
                            <div key={i}>
                                { comment.username }: { comment.content }
                            </div>
                        )
                    })
                } */}
                { comments.map((comment, i) => <Comment comment={comment} key={i}/>)}
            </div>
        )
    }
}

export default CommentList;