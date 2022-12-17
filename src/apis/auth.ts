import request from '@/utils/request'

/**
 * @description 登錄
 * @property {string} email - 帳號
 * @property {string} password - 密碼
 */

export const userLogin = (payload: { email: string; password: string }) => {
  return request.post('api/users/login', payload)
}
