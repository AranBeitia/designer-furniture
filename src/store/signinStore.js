export default {
  state: {
    isSigned: false,
    user: {}
  },
  mutations: {
    setLoggedUser(state, user) {
      state.isSigned = true
      state.user = user
    }
  },
  actions: {
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
