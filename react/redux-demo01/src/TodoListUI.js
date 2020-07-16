import React from 'react';
import { Input, Button, List } from 'antd';
import axios from 'axios';

const TodoListUI = (props) => {
    return ( 
        <div>
        <div style={{ margin: '10px' }}>
            <Input 
            placeholder={props.inputValue}
            style={{ width: '250px', marginRight: '10px' }} 
            onChange={props.changeInputValue.bind(this)}
            />
            <Button 
            type="primary"
            onClick={props.clickBtn}
            >Add</Button>
        </div>
        <div style={{ margin: '10px', width: '200px' }}>
            <List 
            bordered 
            dataSource={props.list}
            renderItem={(item, index) => (<List.Item onClick={props.deleteItem.bind(this,index)}>{item}</List.Item>)}
            />
        </div>
    </div>
     );
}
 
export default TodoListUI;