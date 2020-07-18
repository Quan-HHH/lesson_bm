import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from './actionTypes';
import axios from 'axios';

export const changeInputAction = (value) => {
    return {
        type: CHANGE_INPUT,
        value
    }
}

export const addItemAction = () => {
    return {
        type: ADD_ITEM
    }
}

export const deleteItemAction = (index) => {
    return {
        type: DELETE_ITEM,
        index
    }
}

export const getListAction = (data) => {
    return {
        type: GET_LIST,
        data
    }
}

export const getTodoList = () => {
    return (dispatch) => {
        axios.get('https://www.easy-mock.com/mock/5f11c6369111f12c8547916c/getList/getList')
            .then((res) => {
                const data = res.data;
                const action = getListAction(data);
                dispatch(action)
            })
    }
}