import axios from 'axios';

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    if(response.status !== 200) {
        alert('出错了');
    }else {
        return response.data;
    }
  }, function (error) {
    // 对响应错误做点什么
    alert('Error!');
    return Promise.reject(error);
  });

  axios.defaults.baseURL = 'http://localhost:3000';