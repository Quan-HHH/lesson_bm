import React, { Component } from 'react';
import 'antd/dist/antd.min.css';
import store from './store/index' // 引入的如果是index.js 连index都可以不写
// import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from './store/actionTypes'
import { changeInputAction, addItemAction, deleteItemAction, getTodoList } from './store/actionCreators'
import TodoListUI from './TodoListUI'


class TodoList extends Component {
    constructor() {
        super();
        this.state = store.getState()
        store.subscribe(this.storeChange)
    }
    componentDidMount() {
        const action = getTodoList();
        store.dispatch(action)
    }
    storeChange = () => {
        this.setState(store.getState())
    }
    changeInputValue(e) {
        console.log(store.getState())
        store.dispatch(changeInputAction(e.target.value))
    }
    clickBtn = () => {
        store.dispatch(addItemAction())
    }
    deleteItem(index) {
        console.log(index)
        store.dispatch(deleteItemAction(index))
    }
    render() { 
        return (
            <TodoListUI 
            inputValue={this.state.inputValue}
            changeInputValue={this.changeInputValue}
            clickBtn={this.clickBtn}
            list={this.state.list}
            deleteItem={this.deleteItem}
            />
         );
    }
}
 
export default TodoList;