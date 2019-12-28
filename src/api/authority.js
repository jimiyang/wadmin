import axios from '@/libs/request'
const getAuthorityInfo = params => axios.get('authority/api/info', params)
const getAuthorityAll = params => axios.get('authority/api/load/all', params)
export {
  getAuthorityAll,
  getAuthorityInfo
}