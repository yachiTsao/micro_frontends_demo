import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    id: '',
    name: ''
  }),
  actions: {
    setUser(user: { id: string; name: string }) {
      this.id = user.id
      this.name = user.name
    }
  }
})
