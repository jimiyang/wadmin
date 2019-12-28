import axios from '@/libs/request'
import qs from 'qs'
//登录
const login = params => axios.post('api-admin/api/login', qs.stringify(params))
/*const load = (params) => 
  axios.post(
	'api/ad/withdraw/list',
	params
  )
const activityList = params => axios.post('api/ad/campaign/list', params)*/
export {login}