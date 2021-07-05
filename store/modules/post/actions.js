import ENV from '@/env'
export default {
  async getResponse({ commit, state }) {
    const response = await this.$axios.$get(
      `${ENV.api.apiUrl}transit/posts?pid=${state.pid}&limit=${state.limit}&tags=${state.tags}`
    )
    if (!response.posts.length) {
      commit('setEndContent', true)
      return
    }
    if (response.posts.length < state.limit) {
      commit('setEndContent', true)
    }
    // можно ещё проверку, если есть длина и endContent === true, то установить endContent на false; для того, чтобы в компонентах не писать лишние строчки
    commit('setPosts', response.posts)
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
