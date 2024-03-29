import axios from 'axios'

const request = axios.create({
  baseURL: '/api',
  timeout: 60 * 1000
})

// 添加一个请求拦截器
request.interceptors.request.use(
  config => {
    if (localStorage.getItem('token')) {
      config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
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
    if (
      (response.data.code === 0 && response.data.msg === 'success') ||
      (response.data.code === 200 && response.data.msg === 'success')
    ) {
      return response.data
    } else {
      if (response.data.code === 10018) {
        // token失效
        setTimeout(() => {
          window.localStorage.removeItem('token')
        }, 400)
        return Promise.reject(new Error('error'))
      } else {
        return Promise.reject(response.data)
      }
    }
  },
  err => {
    return Promise.reject(err)
  }
)

export default request
