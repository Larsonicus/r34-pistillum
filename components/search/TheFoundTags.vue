<template>
  <div v-if="tags" key="search-results" class="found-tags">
    <div v-for="tag in tags" :key="tag.name" class="tag-indent">
      <SearchFoundTagButton
        :tag="tag.name"
        :post-count="tag.postCount"
        class="height-100"
      />
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
.height-100 {
  height: 100%;
}
.padding-0 {
  padding: 0 !important;
}
.found-tags {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 16px;
}
.small-size {
  width: 16px;
  height: 20px;
  font-size: 16px !important;
  min-width: 16px;
}
</style>
