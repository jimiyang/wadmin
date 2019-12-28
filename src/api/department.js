import axios from '@/libs/request'
const getListDept = params => axios.get('dept', params)
const addDept = params => axios.post('dept/add', params)
const deleteDept = params => axios.delete('dept/batchDel', params)
const updateDept = params => axios.put('dept/update', params)
export {
  getListDept,
  addDept,
  deleteDept,
  updateDept
}