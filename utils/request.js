import axios from 'axios'
import {getUser} from '@/utils/auth'
// 创建axios实例
const service = axios.create({
  baseURL: 'http://localhost:8010',
  timeout: 10000, // 请求超时时间
  changeOrigin: true,
  headers: { 'Authorization': "Bearer " + getUser().token }
})
export default service
