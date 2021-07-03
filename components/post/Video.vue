<template>
  <video
    controls
    playsinline
    :poster="preview"
    class="poster-blur container"
    loading="lazy"
    preload="none"
    @mouseenter="playVideo"
    @play="onScroll"
  >
    <source :src="content" type="video/mp4" />
    The tag video is not supported by your browser.
    <a :href="content">See here!</a>
  </video>
</template>

<script>
export default {
  props: {
    preview: { type: String, required: true },
    content: { type: String, required: true },
  },
  // TODO: Mute
  methods: {
    playVideo(event) {
      event.target.play()
      event.target.style.filter = 'blur(0)'
    },
    onScroll(event) {
      window.addEventListener('scroll', function scroll() {
        const isVideoSkip =
          document.documentElement.scrollTop >=
          event.target.offsetTop + event.target.offsetHeight
        if (isVideoSkip) {
          // BUG: если быстро мотать, то оно не в тот момент останавливает видео
          event.target.pause()
          window.removeEventListener('scroll', scroll)
        } // TODO: если мотать вверх, то тоже ставить на паузу
      })
    },
  },
}
</script>

<style scoped>
.poster-blur {
  filter: blur(6px);
  transition: filter 0.33s linear;
}
</style>
