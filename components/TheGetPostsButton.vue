<template>
  <BaseButton @click.native="getPosts">More!</BaseButton>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      isEndContent: 'modules/post/getEndContent',
    }),
  },
  methods: {
    ...mapActions({
      getResponsePosts: 'modules/post/getResponse',
      changePid: 'modules/post/changePid',
    }),
    getPosts() {
      if (!this.isEndContent) {
        this.changePid({ isIncrement: true })
        this.getResponsePosts()
      }
    },
  },
}
</script>

<style></style>
