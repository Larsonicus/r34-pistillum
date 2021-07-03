<template>
  <div v-if="selectedTags.length" class="d-flex flex-wrap">
    <span>Selected: </span>
    <BaseButton
      v-for="(selectedTag, index) in selectedTags"
      :key="index"
      :value="selectedTag"
      @click.native="removeTag"
      >{{ selectedTag }}</BaseButton
    >
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
    removeTag(event) {
      this.changeSelectedTags(event.target.value)
    },
  },
}
</script>

<style scoped>
.d-flex {
  max-width: 260px;
  display: flex;
}
.flex-wrap {
  flex-wrap: wrap;
}
</style>
