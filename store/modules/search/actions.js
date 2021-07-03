export default {
  async getResponse({ commit }, value) {
    const response = await this.$axios.get(
      `https://r34-gynoecium.herokuapp.com/transit/tags/?q=${value}`
    )
    commit('setFoundTags', response.data.tags)
  },
  changeSelectedTags({ commit, state }, tag) {
    if (state.bannedTags.includes(tag)) {
      commit('removeBannedTag', tag)
      commit('addSelectedTag', tag)
      return
    }
    if (state.selectedTags.includes(tag)) {
      commit('removeSelectedTag', tag)
      return
    }
    commit('addSelectedTag', tag)
  },
  changeBannedTags({ commit, state }, tag) {
    if (state.selectedTags.includes(tag)) {
      commit('removeSelectedTag', tag)
      commit('addBannedTag', tag)
      return
    }
    if (state.bannedTags.includes(tag)) {
      commit('removeBannedTag', tag)
      return
    }
    commit('addBannedTag', tag)
  },
  // addPresetTag({ commit, state }, tag) {
  //   if (state.bannedTags.includes(tag)) {
  //     commit
  //   }
  // },
}
