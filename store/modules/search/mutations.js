export default {
  setFoundTags(state, foundTags) {
    state.foundTags = foundTags
  },
  addSelectedTag(state, selectedTag) {
    state.selectedTags.push(selectedTag)
  },
  removeSelectedTag(state, selectedTag) {
    const tagIndex = state.selectedTags.indexOf(selectedTag)
    state.selectedTags.splice(tagIndex, 1)
  },
  addBannedTag(state, bannedTag) {
    state.bannedTags.push(bannedTag)
  },
  removeBannedTag(state, bannedTag) {
    const tagIndex = state.bannedTags.indexOf(bannedTag)
    state.bannedTags.splice(tagIndex, 1)
  },
}
