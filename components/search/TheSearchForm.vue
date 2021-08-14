<template>
  <form @submit.prevent>
    <input
      v-model="value"
      pattern="^[a-zA-Z_()0-9]+$"
      type="text"
      autocomplete="off"
      class="input-container shadow white-color"
      @click="showSearchList"
      @keyup.enter="search"
      @input="debouncedOnInput"
    />
    <SearchTheSearchButton />
  </form>
</template>

<script>
import showSearchListMixin from '@/mixins/showSearchListMixin'
import { mapActions } from 'vuex'
import debounce from 'lodash.debounce'
export default {
  mixins: [showSearchListMixin],
  data() {
    return {
      value: '',
    }
  },
  computed: {
    debouncedOnInput() {
      return debounce(this.search, 350)
    },
  },
  methods: {
    ...mapActions({
      getResponseTags: 'modules/search/getResponse',
    }),
    search() {
      this.getResponseTags(this.value)
    },
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
    --input-width: 185px;
  }
  .input-container {
    background-color: #162447;
  }
}
@media screen and (min-width: 1400px) {
  :root {
    --input-width: 300px;
  }
  .input-container {
    background-color: #162447;
  }
}
</style>
