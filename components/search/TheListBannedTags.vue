<template>
  <div v-if="bannedTags.length" class="d-flex flex-wrap">
    <span class="chosen-tags">Banned: </span>
    <BaseButton
      v-for="(bannedTag, index) in bannedTags"
      :key="index"
      class="break-word d-flex tag-indent"
      @click.native="removeBanTag(bannedTag)"
    >
      <span>{{ bannedTag }}</span>
      <SearchCloseButton />
    </BaseButton>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      bannedTags: 'modules/search/getBannedTags',
    }),
  },
  methods: {
    ...mapActions({
      changeBannedTags: 'modules/search/changeBannedTags',
    }),
    removeBanTag(tag) {
      this.changeBannedTags(tag)
    },
  },
}
</script>

<style></style>
