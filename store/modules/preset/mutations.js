export default {
  setPresetMenuState(state) {
    if (state.isShowPresetMenu === false) {
      state.isShowPresetMenu = true
      return
    }
    state.isShowPresetMenu = false
  },
}
