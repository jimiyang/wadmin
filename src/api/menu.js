import axios from '@/libs/request'
//查询菜单管理列表分页
const getMenuAllList = params => axios.get('api-admin/menu/web', params)
//删除菜单
const deleteMenu = params => axios.delete('api-admin/menu/web/del', params)
//批量删除菜单
const delBatchMenu = params => axios.delete('api-admin/menu/web/delBatch', params)
//根据用户id获取用户菜单信息
const getUserInfo = params => axios.get('api-admin/menu/web/info/user', params)
//通过菜单ID获取菜单
const getMenuId = params => axios.get2('api-admin/menu/web/info', params)
///查询菜单管理列表分页
const getMenuList = params => axios.get('api-admin/menu/web/list', params)
//分配该角色选择的菜单
const savePermissionMenu = params => axios.post('api-admin/menu/web/permission/save', params)
//获取该角色拥有的菜单
const getPermissionId = params => axios.get2('api-admin/menu/web/permission', params)
//新增菜单
const saveMenu = params => axios.post('api-admin/menu/web/save', params)
//更新菜单
const updateMenu = params => axios.put('api-admin/menu/web/update', params)
export {
    deleteMenu,
    delBatchMenu,
    getUserInfo,
    getMenuId,
    getMenuList,
    getMenuAllList,
    savePermissionMenu,
    getPermissionId,
    saveMenu,
    updateMenu
}