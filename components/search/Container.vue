<template>
  <div class="navbar__search z-index-10">
    <SearchTheSearchForm />
    <div id="search-list" class="navbar__search-list">
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

<style>
.break-word {
  word-break: break-word;
}
.z-index-10 {
  z-index: 10;
}
</style>
