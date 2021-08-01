export default {
  async getResponse({ commit, state }) {
    const response = await this.$axios.$get(
      `${this.$config.apiUrl}transit/posts?pid=${state.pid}&limit=${state.limit}&tags=${state.tags}`
    )
    const posts = response.posts
    if (!posts.length) {
      commit('setEndContent', true)
      return
    }
    if (posts.length < state.limit) {
      commit('setEndContent', true)
    }
    commit('setPosts', posts)
    // можно ещё проверку, если есть длина и endContent === true, то установить endContent на false; для того, чтобы в компонентах не писать лишние строчки
  },
  changeTags({ commit }, tags) {
    commit('setTags', tags)
  },
  changePid({ commit }, { isIncrement }) {
    if (isIncrement) {
      commit('incrementPid')
      return
    }
    commit('setPid', 0)
  },
  changeEndContent({ commit }) {
    commit('setEndContent', false)
  },
  voidPosts({ commit }) {
    commit('clearPosts')
  },
}
