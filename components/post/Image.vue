<template>
  <img :src="content" loading="lazy" decoding="async" class="d-block" />
</template>

<script>
export default {
  props: {
    content: { type: String, required: true },
  },
}
</script>

<style scoped>
.d-block {
  display: block;
}
</style>
