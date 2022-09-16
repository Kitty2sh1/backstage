import http from "./request.js"
export const getLogin=(params)=>http.post('lejuAdmin/index/login',params)
