import request from '@/utils/request'
import { ILogin } from '@/pages/login/model'

// 登录
function login(data: ILogin) {
  return request.post('/login', data)
}

export default {
  login
}