import axios from "axios";

// *4.返回Promise(推荐)
export function request(config) {
  // 4.1创建axios的实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  // 4.2 请求拦截器
  instance.interceptors.request.use(config => {
    return config
  }, err => {
  })
  instance.interceptors.response

  // 4.3 响应拦截器
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
  })

  // 4.4 发送网络请求
  return instance(config)
}

