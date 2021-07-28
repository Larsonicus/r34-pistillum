<template>
  <img
    :src="content"
    loading="lazy"
    decoding="async"
    class="d-block"
    @error="$event.target.src = `https://cors-proxy.r34.app/?q=${content}`"
  />
</template>

<script>
export default {
  props: {
    content: { type: String, required: true },
  },
}
</script>

<style></style>
