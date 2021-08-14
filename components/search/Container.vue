<template>
  <div class="navbar__search z-index-10">
    <SearchTheSearchForm class="search-form" />
    <div id="search-list" class="navbar__search-list">
      <!-- TODO: v-show -->
      <SearchThePresetButton class="preset-button" />
      <SearchTheFoundTags />
      <SearchTheListSelectedTags />
      <SearchTheListBannedTags />
    </div>
  </div>
</template>

<script>
import hideSearchListOnMountedMixin from '@/mixins/hideSearchListOnMountedMixin'
export default {
  mixins: [hideSearchListOnMountedMixin],
}
</script>

<style>
.search-form {
  margin-bottom: 16px;
}
.chosen-tags {
  display: flex;
  align-items: center;
}
.break-word {
  word-break: break-word;
}
.width-button-20px {
  width: 20px;
  min-width: 20px;
  margin: 0;
}
.height-20px {
  height: 20px;
}
.tag-indent {
  margin-right: 8px;
  margin-bottom: 4px;
}
.preset-button {
  display: none;
  position: absolute;
  right: 0;
}
.z-index-10 {
  z-index: 10;
}
@media screen and (min-width: 1200px) {
  .preset-button {
    display: block;
  }
}
</style>
