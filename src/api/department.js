import axios from '@/libs/request'
//查询部门树形结构
const getListDept = params => axios.get('api-admin/dept/web', params)
//查询部门列表
const getWebList = params => axios.get('api-admin/dept/web/list', params)
//新增
const addDept = params => axios.post('api-admin/dept/web/add', params)
//批量删除
const deleteDept = params => axios.delete2('api-admin/dept/web/batchDel', params)
//修改部门
const updateDept = params => axios.put('api-admin/dept/web/update', params)
//获取部门
const getDeptInfo = params => axios.get2('api-admin/dept/web/info', params)
//删除部门
const deleteSingelDept = params => axios.delete('api-admin/dept/web/del', params)
export {
  getListDept,
  getWebList,
  addDept,
  deleteDept,
  updateDept,
  deleteSingelDept,
  getDeptInfo
}