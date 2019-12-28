import axios from '@/libs/request'
//根据用户名(手机号或者邮箱)获取用户信息
const getUserApi = params => axios.get('api-admin/user/api', params)
//获取用户信息
const getPrincipal = params => axios.get('api-admin/user/principal', params)
//用户信息分页
const getUserList = params => axios.get('api-admin/user/web', params)
//添加用户
const addUser = params => axios.put('api-admin/user/web/add', params)
//校验用户某属性值是否重复-后端管理用户管理
const getUserCheck = params => axios.get('api-admin/user/web/check', params)
//根据用户id删除用户信息
const delUser = params => axios.delete('api-admin/user/web/del', params)
//批量删除用户管理-后端管理用户管理
const delUserBatch = params => axios.delete('api-admin/user/web/delBatch', params)
//根据用户id获取用户信息
const getUserInfo = params => axios.get('api-admin/user/info', params)
export {
  getUserApi,
  getUserList,
  getUserInfo,
  addUser,
  getUserCheck,
  delUser,
  delUserBatch,
  getPrincipal
}
