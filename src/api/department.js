import service from "../../src/utils/request";

// 新增部门接口
export function DepartmentAddApi(data){
    return service.request({
        url: '/department/add',
        method: 'POST',
        data: data,//请求类型为post时
        // params: data //请求类型为get时
    })
}
