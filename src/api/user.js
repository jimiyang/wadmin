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
//判断用户原密码是否正确-后台管理用户管理
const getUserJudge = params => axios.get('api-admin/user/web/judge', params)
//分配用户角色-后端管理用户管理
const getUserRolw = params => axios.put('api-admin/user/web/role', params)
//修改用户状态 0无效 1有效 
const getUserStatus = params => axios.put('api-admin/user/web/status', params)
//修改用户
const updateUser = params => axios.put('api-admin/user/web/update', params)
//修改用户密码-后端管理用户管理
const updatePassword = params => axios.put('api-admin/user/web/updatePassword', params)
export {
  getUserApi,
  getUserList,
  getUserInfo,
  addUser,
  getUserCheck,
  delUser,
  delUserBatch,
  getPrincipal,
  getUserJudge,
  getUserRolw,
  getUserStatus,
  updateUser,
  updatePassword
}
