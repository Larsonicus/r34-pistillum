<template>
  <md-button class="md-icon-button" @click="openPresetMenu">
    <md-icon class="md-size-2x">filter_list</md-icon>
  </md-button>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions({
      showPresetMenu: 'modules/preset/changePresetMenu',
    }),
    openPresetMenu() {
      this.showPresetMenu()
    },
  },
}
</script>

<style></style>
