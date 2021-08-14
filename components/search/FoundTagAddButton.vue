<template>
  <BaseButton class="add-button break-word" @click.native="addTag">
    <md-button class="md-icon-button height-20px width-button-20px">
      <md-icon class="small-size">add</md-icon>
    </md-button>
    <span class="mr-4px">{{ tag + ` (${postCount})` }}</span>
  </BaseButton>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    tag: { type: String, required: true },
    postCount: { type: Number, required: true },
  },
  methods: {
    ...mapActions({
      changeSelectedTags: 'modules/search/changeSelectedTags',
    }),
    addTag() {
      this.changeSelectedTags(this.tag)
    },
  },
}
</script>

<style scoped>
.add-button {
  padding: 1px;
  box-shadow: none;
  border-radius: 4px 0px 0px 4px;
  display: flex;
  align-items: center;
}
.md-icon.md-theme-default.md-icon-font {
  color: rgba(255, 255, 255, 0.5) !important;
}
.mr-4px {
  margin-right: 4px;
}
</style>
