import service from "../utils/request";

// 登录接口
export function Login(data){
    return service.request({
        url: '/login/',
        method: 'post',
        data: data,//请求类型为post时
        // params: data //请求类型为get时
    })
}


// 登录接口
export function Dati(data){
    return service.request({
        url: '/api/rtimu/',
        method: 'get',
        // data: data,//请求类型为post时
        params: data //请求类型为get时
    })
}