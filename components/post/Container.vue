<template>
  <div class="mb-2">
    <BaseButton
      v-if="contentType === 'image'"
      class="clear-button"
      @click.native="isImageTags = !isImageTags"
    >
      <LazyPostImage :content="content" class="container" :height="height" />
    </BaseButton>
    <PostInfo v-if="isImageTags" :tags="tags" />
    <div v-else-if="contentType === 'video'" style="position: relative">
      <LazyPostVideo
        loop
        :content="content"
        :preview="preview"
        class="container"
      />
      <BaseButton
        style="position: absolute; top: 0; right: 0"
        @click.native="isVideoTags = !isVideoTags"
        >TAGS</BaseButton
      >
      <PostInfo v-if="isVideoTags" :tags="tags" class="mb-2" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: { type: String, required: true },
    contentType: { type: String, required: true },
    tags: { type: Array, required: true },
    preview: { type: String, required: true },
    dataWidth: { type: Number, required: true },
    dataHeight: { type: Number, required: true },
  },
  data() {
    return {
      isImageTags: false,
      isVideoTags: false,
    }
  },
  computed: {
    height() {
      return this.dataHeight / (this.dataWidth / 720) // 720 - это width .container'а
    },
  },
}
</script>

<style></style>
