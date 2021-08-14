<template>
  <div v-if="selectedTags.length" class="d-flex flex-wrap selected-indent">
    <span class="chosen-tags">Selected: </span>
    <BaseButton
      v-for="(selectedTag, index) in selectedTags"
      :key="index"
      class="break-word d-flex tag-indent"
      @click.native="removeTag(selectedTag)"
    >
      <span>{{ selectedTag }}</span>
      <SearchCloseButton />
    </BaseButton>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      selectedTags: 'modules/search/getSelectedTags',
    }),
  },
  methods: {
    ...mapActions({
      changeSelectedTags: 'modules/search/changeSelectedTags',
    }),
    removeTag(tag) {
      this.changeSelectedTags(tag)
    },
  },
}
</script>

<style scoped>
.selected-indent {
  margin-bottom: 6px;
}
</style>
