import React from 'react';

function CommentInput() {
    return (

        <div className="comment-Input">
            <div className="comment-field">
                <span className="comment-field-name">用户名</span>
                <div className="comment-field-input">
                    <input type="text" />
                </div>
            </div>
            <div className="comment-field">
                <span className="comment-field-name">用户名</span>
                <div className="comment-field-input">
                    <input type="text" />
                </div>
            </div>
            <div className="comment-field-button">
                <button>发布</button>
            </div>
        </div>
    )
}

export default CommentInput;