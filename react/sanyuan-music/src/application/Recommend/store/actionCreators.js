import * as actionTypes from './constants';
import { getRecommendListRequest, getBannerRequest } from '../../../api/request';
export const getRecommendList = () => {
    return (dispatch) => {
        getRecommendListRequest().then(data => {
            dispatch(changeRecommendList(data));
            dispatch(changeEnterLoading(false));
        }).catch(() => {
            console.log("推荐歌单数据传输有误");
        })
    }
}

export const getBanners = () => {
    return (dispatch) => {
        getBannerRequest().then(data => {
            const action = changeBanners(data.data.banners);
            dispatch(action);
        })
        .catch(() => {
            console.log("轮播数据传输有误");
        })
    }
}

export const changeRecommendList = (data) => ({
    type: actionTypes.CHANGE_RECOMMEND_LIST,
    data
})

export const changeEnterLoading = (data) => ({
    type: actionTypes.CHANGE_ENTER_LOADING,
    data
})

export const changeBanners = (data) => ({
    type: actionTypes.CHANGE_BANNER,
    data
})
