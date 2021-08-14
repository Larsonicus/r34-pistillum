<template>
  <div v-show="isShowPresetMenu">
    <div class="preset-popup" @click="closePresetMenu"></div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      isShowPresetMenu: 'modules/preset/getPresetMenuState',
    }),
  },
  methods: {
    ...mapActions({
      hidePresetMenu: 'modules/preset/changePresetMenu',
    }),
    closePresetMenu() {
      // на элемент добавлять класс в котором анимация затухания
      this.hidePresetMenu()
    },
  },
}
</script>

<style scoped>
.preset-popup__background {
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 100%;
  background-color: black;
}
.preset-popup {
  position: fixed;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.5;
  height: 100%;
  width: 100%;
  z-index: 100;
  transition: opacity 0.3s;
  animation-duration: 1s;
  animation-name: slidedown;
}
@keyframes slidedown {
  from {
    transform: translate3d(0, -100%, 0);
  }
  to {
    transform: translate3d(0, 0%, 0);
  }
}
</style>
