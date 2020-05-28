// 只负责UI 不负责数据
import React from 'react';
import { connect } from 'react-redux'
import CommentList from '../components/CommentList'

class CommentListContainer extends React.Component {
    render() {
        console.log(this.props.comments)
        return (
            <CommentList
                comments={this.props.comments}
            />
        )
    }
}

// 这个state是redux给的
const mapStateToProps = (state) => {
    return {
        comments: state.comments
    }
}
// const mapDispatchToProps = (dispatch) => {
//   return {
//     onDeleteComment: (commentIndex) => {
//       dispatch(deleteComment(commentIndex))
//     }
//   }
// }
export default connect(
    mapStateToProps, //connect是个函数 mapStateToProps是个参数 这个参数本身也是个函数 返回状态数据
    // mapDispatchToProps
)(CommentListContainer)