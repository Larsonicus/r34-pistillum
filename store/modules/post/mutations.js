export default {
  clearPosts(state) {
    state.posts = []
  },
  setPosts(state, posts) {
    state.posts.push(...posts)
  },
  incrementPid(state) {
    state.pid++
  },
  setPid(state, pid) {
    state.pid = pid
  },
  setLimit(state, limit) {
    state.limit = limit
  },
  setTags(state, tags) {
    state.tags = tags
  },
  setEndContent(state, isEndContent) {
    state.isEndContent = isEndContent
  },
}
