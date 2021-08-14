<template>
  <BaseButton class="found-tag-button padding-0">
    <SearchFoundTagAddButton :tag="tag" :post-count="postCount" />
    <SearchFoundTagBanButton :tag="tag" />
  </BaseButton>
</template>

<script>
export default {
  props: {
    tag: { type: String, required: true },
    postCount: { type: Number, required: true },
  },
}
</script>

<style scoped>
.found-tag-button {
  display: grid;
  grid-template-columns: 1fr 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
