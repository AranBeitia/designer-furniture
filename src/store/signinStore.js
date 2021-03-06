import UserRepository from '@/infra/users/UserRepository'

export default {
  state: {
    isSigned: false,
    user: {}
  },
  mutations: {
    setSignedUser(state, user) {
      state.isSigned = true
      state.user = user
    }
  },
  actions: {
    getUsers({ commit }) {
      const userData = UserRepository.getUsers()
      commit('setSignedUser', userData)
    }
  },
  getters: {
    isSigned(state) {
      return state.isSigned
    },
    userName(state) {
      return state.user.userName
    }
  }
}
