<template>
  <BaseButton class="fs-1" @click.native="search">Search!</BaseButton>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      selectedTags: 'modules/search/getSelectedTags',
      bannedTags: 'modules/search/getBannedTags',
    }),
  },
  methods: {
    ...mapActions({
      changeTags: 'modules/post/changeTags',
      getResponsePosts: 'modules/post/getResponse',
      voidPosts: 'modules/post/voidPosts',
      changeEndContent: 'modules/post/changeEndContent',
      changePid: 'modules/post/changePid',
    }),
    search() {
      const requestTags = `${this.selectedTags.join('+')}${
        this.bannedTags.length ? '+-' + this.bannedTags.join('+-') : ''
      }`
      this.$router.push(`/?tags=${requestTags}`)
      // почему-то пушит %20 вместо %2B
      const queryTags = this.$route.query.tags?.replace(/ /g, '+')
      if (queryTags !== requestTags) {
        this.changeEndContent()
        this.changeTags(requestTags)
        this.voidPosts()
        this.changePid({ isIncrement: false })
        this.getResponsePosts()
        return
      }
      console.log('Не флуди!') // TODO: вывести на страницу, а не в консоль
    },
  },
}
</script>

<style></style>
