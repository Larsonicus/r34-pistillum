<template>
  <div class="mb-2 post-wrapper">
    <div v-if="contentType === 'image'">
      <BaseButton
        class="clear-button p-relative"
        @click.native="isTagsOpen = !isTagsOpen"
      >
        <!-- TODO: сделать адаптивное разрешение картинки -->
        <LazyPostImage
          :content="content"
          class="container image-resolution background-blue"
          :height="dataHeight"
          :width="dataWidth"
        />
        <!-- TODO: сделать, чтобы тэги не появлялись при открытии popup'а -->
        <!-- <BaseButton class="fullscreen-button" @click.native="isPopupOpen = true"
          >Fullscreen</BaseButton
        > -->
      </BaseButton>
      <!-- <PostImagePopup
        v-show="isPopupOpen"
        :content="content"
        :data-width="dataWidth"
        :data-height="dataHeight"
        @close="isPopupOpen = false"
      /> -->
      <PostInfoContainer :tags="tags" :is-tags-open="isTagsOpen" />
    </div>
    <div v-else class="p-relative">
      <LazyPostVideo
        loop
        :content="content"
        :preview="preview"
        class="container"
      />
      <BaseButton
        class="p-absolute right-top-angle"
        @click.native="isTagsOpen = !isTagsOpen"
        >TAGS</BaseButton
      >
      <PostInfoContainer :tags="tags" :is-tags-open="isTagsOpen" />
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
    // sourceLink: { type: String, default: '' },
  },
  data() {
    return {
      isTagsOpen: false,
      // isPopupOpen: false,
    }
  },
}
</script>

<style scoped>
.fullscreen-button {
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
  z-index: 9;
}
.post-wrapper {
  padding-bottom: 1rem;
  background-color: #162447;
}
.background-blue {
  background: #162447;
}
.image-resolution {
  height: auto;
  width: 100%;
}
</style>
