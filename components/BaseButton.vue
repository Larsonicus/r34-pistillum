<template>
  <button type="button" class="default-button"><slot></slot></button>
</template>

<script>
export default {}
</script>

<style scoped>
.default-button {
  padding: 4px 7px;
  border-style: none;
  background: rgba(22, 36, 71, 0.6);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.5);
  align-items: center;
}
</style>
