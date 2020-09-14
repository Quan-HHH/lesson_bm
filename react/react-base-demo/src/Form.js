import React, { useState } from 'react';

function Form() {
    const [username, setUsername] = useState('');
    const [checkbox, setCheckbox] = useState(true);
    const [gender, setGender] = useState('man');

    const handleChange = (e,  name) => {
        name === setCheckbox ? name(e.target.checked) : name(e.target.value)
    }
    
    const submitHandler = (e) => {
        e.preventDefault();
        let is = checkbox ? '是' : '不是';
        let genderr = gender === 'man' ? '帅哥' : '美女'
        alert(username + is + genderr)
    }
    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="username">请输入您的姓名:</label>
            <input 
                type="text" 
                name="username" 
                id="username" 
                value={username}
                onChange={(e) => {handleChange(e,setUsername)}}
            />
            <br/>
            <label htmlFor="checkbox">是或者否:</label>
            <input 
                type="checkbox" 
                name="checked" 
                id="checkbox" 
                checked={checkbox}
                onChange={(e) => {handleChange(e, setCheckbox)}}
            />
            <br/>
            <label htmlFor="username">请选择:</label>
            <select 
                name="gender" 
                value={gender}
                onChange={(e) => {handleChange(e, setGender)}}
            >
                <option value="man">帅哥</option>
                <option value="woman">美女</option>
            </select>
            <br/>
            <button type="submit">提交</button>
        </form>
    )
}

export default Form