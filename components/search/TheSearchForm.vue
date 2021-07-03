<template>
  <div class="ta-center">
    <form @submit.prevent>
      <input
        v-model="value"
        pattern="^[a-zA-Z_()0-9]+$"
        type="text"
        autocomplete="off"
        placeholder="Anal Rape Jesus"
        autofocus
        class="input-container"
      />
    </form>
  </div>
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
  font-size: 2em;
  max-width: 255px;
}
</style>
