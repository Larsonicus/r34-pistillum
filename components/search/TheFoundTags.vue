<template>
  <div v-if="tags" key="search-results">
    <div v-for="tag in tags" :key="tag.name" class="found-tags">
      <SearchFoundTagAddButton :tag="tag.name" :post-count="tag.postCount" />
      <SearchFoundTagBanButton :tag="tag.name" />
    </div>
  </div>
  <div v-else key="search-status">Nothing!</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      tags: 'modules/search/getFoundTags',
    }),
  },
}
</script>

<style>
.found-tags {
  display: grid;
  grid-template-columns: 90% 10%;
} /* TODO: add adaptive? */
</style>
