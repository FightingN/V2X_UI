import axios from 'axios'

const request = axios.create({
  // baseURL: 'http://localhost:8081/',
  // baseURL: 'http://172.17.204.221:8081/',
  baseURL: 'http://39.105.172.133:9999',
  timeout: 60 * 1000
})

// 添加一个请求拦截器
request.interceptors.request.use(
  config => {
    if (localStorage.getItem('token')) {
      let defaultParams = {
        'XX-Access-Token': localStorage.getItem('token')
      }
      config.headers = Object.assign(defaultParams, config.headers)
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// 添加一个响应拦截器
request.interceptors.response.use(
  response => {
    // if (
    //   (response.data.code === 0 && response.data.msg === 'success') ||
    //   (response.data.code === 200 && response.data.msg === 'success')
    // ) {
    //   return response.data
    // } else {
    //   return Promise.reject(response.data)
    // }
    return response.data
  },
  err => {
    return Promise.reject(err)
  }
)

export default request
