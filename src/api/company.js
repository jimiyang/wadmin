import axios from '@/libs/request'
const getListCompany = params => axios.get('api-admin/company/web', params)
const addCompany = params => axios.post('api-admin/company/web/add', params)
const deleteCompany = params => axios.delete2('api-admin/company/web/batchDel', params)//批量删除
const deleteSingleCompany = params => axios.delete('api-admin/company/web/del', params) //单独删除
const getCompanyInfo = params => axios.get('api-admin/company/web/info', params)
const updateCompany = params => axios.put('api-admin/company/web/update', params)
export {
  getListCompany,
  addCompany,
  deleteCompany,
  deleteSingleCompany,
  updateCompany,
  getCompanyInfo
}