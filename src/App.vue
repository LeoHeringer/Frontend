<template>
  <div id="app">
    <Menu v-if="this.$router.currentRoute.path != '/'"></Menu>

    <router-view />
  </div>
</template>

<script>
import Menu from '@/components/button/menu/menuInfo.vue';

export default {
  components: {
    Menu
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Mandali&display=swap');

:root {
  --cor-primaria: #E0E0E0;
  --cor-secundaria: #757575;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Quicksand', sans-serif;
}

.titulo {
  font-weight: 600;
  color: #363636;
  font-size: 25px;
  margin-top: 10px;
}

/* Override */
.btn-primary,
.btn-primary:active .btn-primary:focus,
.btn-primary:focus-visible,
.btn-primary:visited,
.btn-primary:not(:disabled):not(.disabled):active {
  color: #fff;
  background-color: var(--cor-primaria);
  border: var(--cor-primaria);
  outline: none;
  box-shadow: none;
  min-width: 90px;
}

.btn-primary:hover {
  color: #fff;
  background-color: var(--cor-secundaria);
  border-color: var(--cor-secundaria);
}
</style>
