import axios from "axios"
import { Loading } from "element-ui"
const instance = axios.create({
    baseURL: 'http://leju.bufan.cloud/',//存放基准地址
    timeout: 3000
});

var loading;
// 添加请求拦截器
instance.interceptors.request.use((config) => {
    // 在发送请求之前做些什么
    loading = Loading.service({
        lock: true,
        text: '努力加载中....',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
    });
    let token = localStorage.getItem('token')
    if (token) {
        config.headers.token = token
    }
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use((response) => {
    // 对响应数据做点什么
    loading.close()
    return response;
}, function (error) {
    loading.close()
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default instance;