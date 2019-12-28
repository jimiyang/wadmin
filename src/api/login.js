import axios from '@/libs/request'
import qs from 'qs'
//登录
const login = params => axios.post('api-admin/api/login', qs.stringify(params))
export {login}