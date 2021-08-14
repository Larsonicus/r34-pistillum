<template>
  <div>
    <nav
      id="navbar"
      class="navbar z-index-10"
      :class="{ 'navbar--hidden': !isShowNavbar }"
    >
      <MenuTheMenuButton class="navbar__button" />
      <SearchContainer />
      <SearchThePresetButton id="hide-on-desktop" class="navbar__button" />
    </nav>
    <PresetContainer />
    <Nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowNavbar: true,
      lastScrollPosition: 0,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition < 0) {
        return
      }
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 55) {
        return
      }
      this.isShowNavbar = currentScrollPosition < this.lastScrollPosition
      this.lastScrollPosition = currentScrollPosition
    },
  },
}
</script>

<style>
:root {
  --container-width: 720px;
  /* ! ИЗМЕНЯЯ НАЗВАНИЯ ПЕРЕМЕННЫХ ТУТ, НЕ ЗАБУДЬТЕ ИЗМЕНИТЬ ИХ В ЗАВИСИМЫХ КОМПОНЕНТАХ (PostContainer) ! */
}
html {
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
body {
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: normal;
  background-color: #1b1b2f;
  color: #ccc;
}
input,
textarea,
select,
button {
  font: inherit;
}
.container {
  width: var(--container-width);
}
.navbar {
  display: grid;
  grid-template-columns: 60px 1fr 60px;
  position: fixed;
  z-index: 54;
  top: 0;
  width: 100%;
  height: 55px;
  background-color: #162447;
  transform: translate3d(0, 0, 0);
  transition: 0.1s all ease-out;
}
.navbar.navbar--hidden {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
}
.navbar__button {
  position: relative;
  top: 0.5em;
}
.navbar__search {
  position: relative;
  top: 0.5em;
  right: 0;
}
.navbar__search-list {
  display: grid;
  grid-template-columns: 1fr 10px;
  position: absolute;
  top: 2.75em;
  background: #1b1b2f;
}
.p-relative {
  position: relative;
}
.p-absolute {
  position: absolute;
}
.d-inline {
  display: inline;
}
.d-block {
  display: block;
}
.d-flex {
  display: flex;
}
.flex-wrap {
  flex-wrap: wrap;
}
.mb-1 {
  margin-bottom: 1em;
}
.mb-05 {
  margin-bottom: 0.5em;
}
.mt-1 {
  margin-top: 1em;
}
.mt-2 {
  margin-top: 2em;
}
.mr-1 {
  margin-right: 1em;
}
.l1 {
  left: 1em;
}
.l2 {
  left: 2em;
}
.t1 {
  top: 1em;
}
.t2 {
  top: 2em;
}
.t4 {
  top: 4em;
}
.md-icon.md-size-2x {
  width: 40px;
  min-width: 40px;
  height: 40px;
  font-size: 40px !important;
}
.md-icon.md-theme-default.md-icon-font {
  color: aliceblue !important;
}
/* телефон */
@media screen and (min-width: 320px) {
  :root {
    --container-width: 100%;
  }
  .navbar__search-list {
    position: absolute;
    top: 3.5em;
    width: var(--input-width);
  }
}
@media screen and (min-width: 576px) {
  :root {
    --container-width: 100%;
  }
}
@media screen and (min-width: 768px) {
  :root {
    --container-width: 100%;
  }
  .navbar__search-list {
    left: 26.5%;
    width: calc(var(--input-width) / 2);
  }
}
/* планшет */
@media screen and (min-width: 992px) {
  :root {
    --container-width: 500px;
  }
}
/* десктоп */
/* мой маленький моник */
@media screen and (min-width: 1200px) {
  :root {
    --container-width: 650px;
  }
  #hide-on-desktop {
    display: none;
  }
  .navbar {
    top: 1em;
    height: 0;
  }
  .navbar__button {
    position: absolute;
    left: 1em;
  }
  .navbar__search {
    position: absolute;
    right: 1em;
  }
  .navbar__search-list {
    position: static;
    top: 0;
    left: 0;
    background: 0;
    width: var(--input-width);
  }
}
/* мой большой моник */
@media screen and (min-width: 1400px) {
  :root {
    --container-width: 750px;
  }
}
/* TODO: сделать для 2к и 4к */
</style>
