<template>
  <div v-if="tags" key="search-results">
    <div v-for="tag in tags" :key="tag.name" class="d-flex">
      <SearchFoundTagAddButton
        :tag="tag.name"
        :post-count="tag.postCount"
        style="width: 90%"
      />
      <SearchFoundTagBanButton :tag="tag.name" style="width: 10%" />
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
