import { defineStore } from 'pinia'
import { userLogin } from '@/apis/auth'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({}),
  getters: {},
  actions: {
    async login(data: { email: string; password: string }) {
      try {
        const reqData = {
          email: data.email,
          password: data.password
        }
        const res = await userLogin(reqData)
        console.log(res.data.token.created_at)
      } catch (error) {
        return Promise.reject(error)
      }
    }
  }
})
