<template>
  <div class="info-wrapper ta-center">
    <!-- <PostInfoSourceLink v-if="sourceLink" :source-link="sourceLink" /> -->
    <PostInfoTags
      v-show="isTagsOpen"
      :tags="tags"
      class="mt-1 d-flex flex-wrap"
    ></PostInfoTags>
  </div>
</template>

<script>
export default {
  props: {
    // sourceLink: { type: String, default: '' },
    isTagsOpen: { type: Boolean, required: true },
    tags: { type: Array, required: true },
  },
}
</script>

<style scoped>
.info-wrapper {
  padding: 0 0.5rem;
}
</style>
