<template>
  <div>
    <div v-for="post in posts" :key="post.id" class="m-center container">
      <!-- TODO: выводить посты без повторов -->
      <post-container
        :content="post.content"
        :content-type="post.contentType"
        :tags="post.tags"
        :preview="post.preview"
        :data-width="post.contentWidth"
        :data-height="post.contentHeight"
      />
    </div>
    <!-- Если posts.length === 0 -->
    <div class="ta-center">
      <the-end-content />
    </div>
    <div class="ta-center">
      <the-get-posts-button />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  async asyncData({ store, query }) {
    let tags = query.tags?.replace(/ /g, '+')
    if (tags === undefined) {
      tags = ''
    }
    if (tags) {
      // если пользователь обновил страницу, и в query.tags что-то есть
      store.dispatch('modules/post/changeTags', tags)
    }
    await store.dispatch('modules/post/getResponse')
  },
  computed: {
    ...mapGetters({
      posts: 'modules/post/getPosts',
      isEndContent: 'modules/post/getEndContent',
    }),
  },
  mounted() {
    this.scroll()
  },
  methods: {
    ...mapActions({
      getResponsePosts: 'modules/post/getResponse',
      changePid: 'modules/post/changePid',
    }),
    scroll() {
      window.onscroll = () => {
        const bottomOfWindow =
          Math.ceil(document.documentElement.scrollTop + window.innerHeight) >=
          document.documentElement.offsetHeight // TODO: спиннер на 1 секунду
        if (bottomOfWindow && !this.isEndContent) {
          this.changePid({ isIncrement: true })
          this.getResponsePosts()
        }
      }
    },
  },
}
</script>

<style>
.fs-1 {
  font-size: 1rem !important;
}
.c-pointer {
  cursor: pointer;
}
.m-center {
  margin: 0 auto;
}
.ta-center {
  text-align: center;
}
.right-top-angle {
  right: 0;
  top: 0;
}
.clear-button {
  border-width: 0;
  padding: 0;
  width: 100%;
}
.shadow {
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
.white-color {
  color: aliceblue;
}
</style>
