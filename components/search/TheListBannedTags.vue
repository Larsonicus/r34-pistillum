<template>
  <div v-if="bannedTags.length" class="d-flex flex-wrap">
    <span>Blacklist: </span>
    <BaseButton
      v-for="(bannedTag, index) in bannedTags"
      :key="index"
      type="button"
      :value="bannedTag"
      @click.native="removeBanTag"
    >
      {{ bannedTag }}
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
    removeBanTag(event) {
      this.changeBannedTags(event.target.value)
    },
  },
}
</script>

<style></style>
