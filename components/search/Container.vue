<template>
  <div class="header__search z-index-10">
    <SearchTheSearchForm />
    <div class="header__search-list">
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
