import request, { Result } from '@/utils/request'

/**
 * @description 登錄
 * @property {string} email - 帳號
 * @property {string} password - 密碼
 */

interface exanple {
  token: IToken
}
interface IToken {
  created_at: string
  email: string
  expiry: string
  id: number
  token: string
  updated_at: string
  user_id: number
}

export const userLogin = (payload: { email: string; password: string }): Promise<Result<exanple>> => {
  return request.post('api/users/login', payload)
}
