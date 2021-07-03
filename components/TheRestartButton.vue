<template>
  <BaseButton @click.native="redirectHandler">Restart</BaseButton>
</template>

<script>
export default {
  methods: {
    redirectHandler() {
      location.href = '/'
    },
  },
}
</script>

<style></style>
