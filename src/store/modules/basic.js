export default {
  state: {
    coreData: {}
  },
  mutations: {
    set_coreData(state, coreData) {
      state.coreData = coreData
    }
  },
  actions: {
    SET_COREDATA(context, coreData) {
      context.commit('set_coreData', coreData)
    }
  }
}
