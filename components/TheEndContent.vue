<template>
  <span v-if="isEndContent">Content is end!</span>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      isEndContent: 'modules/post/getEndContent',
    }),
  },
}
</script>

<style></style>
