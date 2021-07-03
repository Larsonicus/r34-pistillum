export default {
  getPosts(state) {
    return state.posts // TODO: возвращать, то что необходимо
  },
  getEndContent(state) {
    return state.isEndContent
  },
  getTags(state) {
    return state.tags
  },
}
