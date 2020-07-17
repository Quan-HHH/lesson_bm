import { 
    ACTION_SET_IS_CITY_SELECTOR_VISIBLE 
} from './actions'

export default {
    // 页面状态改变 对应 数据的改变
    isCitySelectorVisible(state = false, action) {
        const { type, payload } = action;
        switch(type) {
            case ACTION_SET_IS_CITY_SELECTOR_VISIBLE: return payload;
            default:
        }
        return state;
    },
    cityData(state = null, action) {
        const { type, payload } = action;
        switch(type) {
            case ACTION_SET_CITY_DATA: return payload;
            default:
        }
        return state;
    },
    // isLoadingCityData 完成这个reducer和相应action的编写
    // 并在fetchCityData中处理与他相关的逻辑

}