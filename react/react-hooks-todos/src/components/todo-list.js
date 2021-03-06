import React, { useState } from 'react';
import { List, Icon } from 'antd';

const { Item } = List;
const TodoList = ({ todos, onToggleFinished }) => {
    //
    const onDelete = e => {

    }

    return (
        <div className="list-wrap">
            {todos.length === 0 ? (
                <p>暂无待办事项</p>
            ) : (
                <List 
                    itemLayout="horizontal"
                    dataSource = {todos}
                    renderItem = {({id, text, finished}, idx) => {
                        const itemClasses = classNames({
                            "list-item": true,
                            "list-item__finished": finished
                        })
                        return (
                            // BEM命名规范
                            <Item className="list-item list-item__finished">
                                {/* <img src="" alt="" className="list-item--avatar"/> */}
                            </Item>
                        )
                    }}
                />
            )}
        </div>
    )
}

export default todoList;