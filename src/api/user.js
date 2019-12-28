import axios from '@/libs/request'
const getUserList = params => axios.get('user', params)
const getUserInfo = params => axios.post('user/api', params)
const addUser = params => axios.post('user/info', params)
const getPrincipal = params => axios.get('user/principal', params)
const updateStatus = params => axios.post('user/status', params)
export {
  getUserList,
  getUserInfo,
  addUser,
  getPrincipal,
  updateStatus
}
