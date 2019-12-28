import axios from 'axios'
import qs from 'qs'
import $config from '@/config'
import {Message} from 'view-design'
let baseUrl = ''
switch (process.env.NODE_ENV) {
  case 'development':
    // 这里是本地的请求url
    baseUrl = $config.apiUrl.dev
    break
  case 'production':
    // 生产环境url
    baseUrl = $config.apiUrl.pro
    break
}
/**
 * 创建axios实例
 * @type {AxiosInstance}
 */
const service = axios.create({
  // api的base_url
  baseURL: baseUrl,
  // 设置请求超时时间30s
  timeout: 30000
})
service.apiUrl = baseUrl
/**
 * 请求参数处理
 */
service.interceptors.request.use((config) => {
    try {
      config.headers['token'] = sessionStorage.getItem('token') 
    } catch (error) {
      sessionStorage.removeItem('token')
    }
    return config
  }, 
  err => {
    return Promise.reject(err)
  }
)
/**
 * 响应结果处理
 */
service.interceptors.response.use(
  (response) => {
		//console.log(response)
    if (response.data.code === 200) {
      // 服务端定义的响应code码为0时请求成功
      return Promise.resolve(response.data)
    } else {
      // 使用Promise.reject 响应
      Message.error({content: response.data.message})
      return Promise.reject(response.data)
    }
  }, error => {
    let message = ''
    if (error && error.response) {
      switch (error.response.status) {
        case 401:
          location.reload()
          return
        case 403:
          message = error.response.data.path + ',' + error.response.data.message
          break
        case 429:
          message = '访问太过频繁，请稍后再试!'
          break
        default:
          message = error.response.data.message ? error.response.data.message : '服务器错误'
          break
      }
      Message.error({content: message})
      // 请求错误处理
      return Promise.reject(error)
    } else {
      message = '连接服务器失败'
      Message.error({content: message})
      return Promise.reject(error)
    }
  }
)
export default {
	post(url, data, header) {
		/*let form = null
		switch(url) {
			case 'check/picVerify':
			break
			default:
			  const token = window.localStorage.getItem('token')
			  form = data !== undefined ? Object.assign(data, {token}) : {token}
			break
		}
		console.log(form)*/
		return service({
			method: 'post',
      url,
      data  //: qs.stringify(data)
		})
  },
  get(url, data) {
		return service({
			method: 'get',
      url,
      params: data
		})
  },
  delete(url, data) {
		return service({
			method: 'delete',
      url: url + '/' + data,
      //data: qs.stringify(data)
		})
  },
  delete2(url, data) {
		return service({
			method: 'delete',
      url,
      data
		})
  },
  put(url, data) {
		return service({
			method: 'PUT',
      url,
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      },
      data: data
		})
  },
}
