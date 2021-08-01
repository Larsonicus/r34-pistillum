<template>
  <form style="max-width: inherit" @submit.prevent>
    <input
      v-model="value"
      pattern="^[a-zA-Z_()0-9]+$"
      type="text"
      autocomplete="off"
      autofocus
      class="input-container shadow white-color mb-1"
      style="max-width: inherit"
    />
  </form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      value: '',
    }
  },
  watch: {
    value() {
      this.getResponseTags(this.value)
    },
  },
  methods: {
    ...mapActions({
      getResponseTags: 'modules/search/getResponse',
    }),
  },
}
</script>

<style scoped>
.input-container {
  font-size: 2rem;
  background-color: #1f4068;
  border-width: 0;
}
@media screen and (min-width: 1200px) {
  .input-container {
    background-color: #162447;
  }
}
</style>
