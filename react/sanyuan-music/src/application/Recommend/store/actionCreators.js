import * as actionType from './constants'
import { getRecommendListRequest, getBannersRequest } from '../../../api/request';
export const changeRecommendList = (data) => {
    return {
        type: actionType.CHANGE_RECOMMEND_LIST,
        data
    }
}

export const changeEnterLoading = (data) => {
    return {
        type: actionType.CHANGE_ENTER_LOADING,
        data
    }
}

export const getRecommendList = () => {
    return (dispatch) => {
        getRecommendListRequest().then(data => {
            dispatch(changeRecommendList(data))
            dispatch(changeEnterLoading(false));
        }).catch(() => {
            console.log('推荐歌单数据有误')
        })   
    }
}

export const changeBanners = (data) => ({
    type: actionType.CHANGE_BANNER,
    data
})

export const getBanners = () => {
    return (dispatch) => {
        getBannersRequest()
        .then(data => {
            const action = changeBanners(data.data.banners);
            dispatch(action);
        })
        .catch(() => {
            console.log('轮播图数据传输有误')
        })
    }
}