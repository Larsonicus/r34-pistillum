<template>
  <span>
    Tags:
    <BaseButton
      v-for="(tag, index) in tags"
      :key="index"
      :value="tag"
      @click.native="getPosts"
    >
      {{ tag }}
    </BaseButton>
  </span>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    tags: { type: Array, required: true },
  },
  methods: {
    ...mapActions({
      getResponsePosts: 'modules/post/getResponse',
      changeTags: 'modules/post/changeTags',
      changeEndContent: 'modules/post/changeEndContent',
      changePid: 'modules/post/changePid',
      voidPosts: 'modules/post/voidPosts',
    }),
    getPosts(event) {
      this.$router.push(`/?tags=${event.target.value}`) // можно убрать, если не использовать query
      this.changeEndContent()
      this.changePid({ isIncrement: false })
      this.changeTags(event.target.value)
      this.voidPosts()
      this.getResponsePosts()
      scrollTo(0, 0)
    },
  },
}
</script>

<style></style>
