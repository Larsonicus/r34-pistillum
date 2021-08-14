<template>
  <md-button
    class="md-icon-button height-100 ban-button padding-0"
    @click="banTag"
  >
    <md-icon class="small-size">do_not_disturb</md-icon>
  </md-button>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    tag: { type: String, required: true },
  },
  methods: {
    ...mapActions({
      changeBannedTags: 'modules/search/changeBannedTags',
    }),
    banTag() {
      this.changeBannedTags(this.tag)
    },
  },
}
</script>

<style scoped>
.ban-button {
  color: black;
  background: #e43f5a;
  border-radius: 0px 4px 4px 0px;
  width: 24px;
  min-width: 24px;
  margin: 0;
}
.md-icon.md-theme-default.md-icon-font {
  color: black !important;
}
</style>
