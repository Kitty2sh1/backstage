import http from "./request.js"

// 登录
export const getLogin = (params) => http.post('lejuAdmin/index/login', params)
// 主页侧边栏
export const getAside = () => http.get('admin/sysAuth/index/getInitMenus')
//商品列表
export const getGoodsList=(start,limit)=>http.post(`lejuAdmin/product/productsByPage/${start}/${limit}`)
