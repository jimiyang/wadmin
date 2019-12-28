import axios from '@/libs/request'
const getListDept = params => axios.get('api-admin/dept', params)
const addDept = params => axios.post('api-admin/dept/add', params)
const deleteDept = params => axios.delete('api-admin/dept/batchDel', params)
const updateDept = params => axios.put('api-admin/dept/update', params)
export {
  getListDept,
  addDept,
  deleteDept,
  updateDept
}