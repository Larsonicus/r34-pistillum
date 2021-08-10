<template>
  <form @submit.prevent>
    <input
      v-model="value"
      pattern="^[a-zA-Z_()0-9]+$"
      type="text"
      autocomplete="off"
      autofocus
      class="input-container shadow white-color"
    />
    <SearchTheSearchButton />
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

<style>
:root {
  --input-width: calc(100% - 60px); /* 60px - типа размер иконки поиска */
}
.input-container {
  font-size: 2rem;
  background-color: #1f4068;
  border-width: 0;
  width: var(--input-width);
}
@media screen and (min-width: 1200px) {
  :root {
    --input-width: 200px;
  }
  .input-container {
    background-color: #162447;
  }
}
@media screen and (min-width: 1400px) {
  :root {
    --input-width: 250px;
  }
  .input-container {
    background-color: #162447;
  }
}
</style>
