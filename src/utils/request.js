import axios from 'axios';

//第一步创建实例
const service = axios.create({
    baseURL: 'devApi',
    timeout: 5000,
  });


  // 第二部请求拦截
  service.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// 第三部响应拦截
service.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });

  export default service