export const ACTION_SET_IS_CITY_SELECTOR_VISIBLE = 'ACTION_SET_IS_CITY_SELECTOR_VISIBLE';
export const ACTION_SET_CITY_DATA = 'ACTION_SET_CITY_DATA'

export function showCitySelector() {
    return {
        type: ACTION_SET_IS_CITY_SELECTOR_VISIBLE,
        payload: true
    }
}

export function fetchCityData() {
    // 异步处理 返回一个函数
    // 数据请求都写在action中
    return (dispatch, getState) => {
        fetch('/rest/cities')
            .then(res => res.json)
            .then(cityData => {
                dispatch(setCityData(cityData))
            })
    }
}

export function setCityData(cityData) {
    return {
        type: ACTION_SET_CITY_DATA,
        payload: cityData
    }
}