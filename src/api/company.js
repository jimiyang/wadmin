import axios from '@/libs/request'
const getListCompany = params => axios.get('api-admin/company/web', params)
const addCompany = params => axios.post('api-admin/company/web/add', params)
const deleteCompany = params => axios.delete('api-admin/company/web/batchDel', params)
//const deleteSingleCompany = params => axios.delete('/company/del')
const updateCompany = params => axios.put('api-admin/company/web/update', params)
export {
  getListCompany,
  addCompany,
  deleteCompany,
  updateCompany
}