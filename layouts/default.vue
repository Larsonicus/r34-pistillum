<template>
  <div class="p-relative">
    <div class="header z-index-10">
      <MenuTheMenuButton class="header__menu" />
      <SearchContainer />
    </div>
    <Nuxt />
  </div>
</template>

<style>
:root {
  --container-width: 720px;
  /* ! ИЗМЕНЯЯ НАЗВАНИЯ ПЕРЕМЕННЫХ ТУТ, НЕ ЗАБУДЬТЕ ИЗМЕНИТЬ ИХ В ЗАВИСИМЫХ КОМПОНЕНТАХ (PostContainer) ! */
}
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
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
  background-color: #1b1b2f;
  color: #ccc;
}
.container {
  width: var(--container-width);
}
.header {
  display: grid;
  grid-template-columns: 60px 1fr;
  position: static;
  z-index: 54;
  top: 0;
  width: 100%;
  height: 55px;
  background-color: #162447;
}
.header__menu {
  position: relative;
  top: 0.5em;
  left: 0;
  margin-right: 1em;
}
.header__search {
  position: relative;
  top: 0.5em;
  right: 0;
}
.header__search-list {
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
  margin-bottom: 1rem;
}
.mb-2 {
  margin-bottom: 2rem;
}
.mt-1 {
  margin-top: 1rem;
}
.mt-2 {
  margin-top: 2rem;
}
.mr-1 {
  margin-right: 1rem;
}
.l1 {
  left: 1rem;
}
.l2 {
  left: 2rem;
}
.t1 {
  top: 1rem;
}
.t2 {
  top: 2rem;
}
.t4 {
  top: 4rem;
}
.md-icon.md-size-2x {
  width: 40px;
  min-width: 40px;
  height: 40px;
  font-size: 40px !important;
}
/* телефон */
@media screen and (min-width: 320px) {
  :root {
    --container-width: 100%;
  }
  .header__search-list {
    position: absolute;
    top: 2.6rem;
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
  .header__search-list {
    left: 23.5%;
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
  .header {
    position: relative;
    top: 1em;
    height: 0;
  }
  .header__menu {
    position: absolute;
    left: 1em;
  }
  .header__search {
    position: absolute;
    right: 1em;
  }
  .header__search-list {
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
