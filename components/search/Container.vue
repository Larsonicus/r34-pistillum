<template>
  <div class="header__search z-index-10">
    <div class="d-flex">
      <div class="mr-1 search-container">
        <SearchTheSearchForm />
        <div class="header__search-list">
          <!-- TODO: v-show -->
          <SearchTheListSelectedTags />
          <SearchTheListBannedTags />
          <SearchTheFoundTags />
        </div>
      </div>
      <SearchTheSearchButton class="header__search-button" />
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
