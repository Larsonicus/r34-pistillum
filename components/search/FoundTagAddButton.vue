<template>
  <BaseButton :value="tag" @click.native="addTag">
    {{ tag + ` (${postCount})` }}
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
    addTag(event) {
      this.changeSelectedTags(event.target.value)
    },
  },
}
</script>

<style></style>
