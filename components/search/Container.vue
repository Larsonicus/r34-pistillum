<template>
  <div class="navbar__search z-index-10">
    <SearchTheSearchForm />
    <div id="searchList" class="navbar__search-list">
      <!-- TODO: v-show -->
      <SearchTheListSelectedTags />
      <SearchTheListBannedTags />
      <SearchTheFoundTags />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.z-index-10 {
  z-index: 10;
}
</style>
