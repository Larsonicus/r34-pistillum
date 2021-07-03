<template>
  <BaseButton :value="tag" @click.native="banTag">-</BaseButton>
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
    banTag(event) {
      this.changeBannedTags(event.target.value)
    },
  },
}
</script>

<style></style>
