<template>
  <div v-if="tags" key="search-results" class="d-flex flex-column">
    <div v-for="tag in tags" :key="tag.name">
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

<style></style>
