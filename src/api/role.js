import axios from '@/libs/request'
//删除角色管理-后端管理角色管理
const deleteRole = params => axios.delete('api-admin/role/web/del', params)
//批量删除角色管理-后端管理角色管理
const deleteBatch = params => axios.delete2('api-admin/role/web/delBatch', params)
///根据用户id获取用户角色信息
const getUserInfo = params => axios.post('api-admin/role/web/info/user', params)
//role/web/info/{id}获取角色-后端管理角色管理
const getRoleInfo = params => axios.delete2('api-admin/role/web/info', params)
//查询角色管理列表分页-后端管理角色管理
const getRoleList = params => axios.get('api-admin/role/web/list', params)
//分配该角色选择的权限-后端管理角色管理
const permissionSave = (params)=> axios.post('api-admin/role/web/permission/save', params)
///role/web/permission/{id}
//获取该角色拥有的权限-后端管理角色管理
const getPermission = params => axios.delete('api-admin/role/web/permission', params)
//role/web/save
//新增角色管理-后端管理角色管理
const roleSave = params => axios.post('api-admin/role/web/save', params)
//查询角色下拉框-后端管理角色管理
const roleSelectList = params => axios.get('api-admin/role/web/select/list', params)
//修改角色管理-后端管理角色管理
const updateRole = params => axios.put('api-admin/role/web/update', params)
export {
    deleteRole,
    deleteBatch,
    getUserInfo,
    getRoleInfo,
    getRoleList,
    permissionSave,
    getPermission,
    roleSave,
    roleSelectList,
    updateRole
}