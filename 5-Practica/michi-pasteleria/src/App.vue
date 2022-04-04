<template>
<div class="barra__menu">
<div>
  <img src="./assets/images/mini-logo.png" alt="mini logo">
</div>
<div>
  <h1>RESPOTERIA MICHI</h1>
  <nav>
    <router-link to="/">Pasteles</router-link>
    <router-link to="/pedido">Pedido</router-link>
    <router-link to="/pastelero">Pastelero</router-link>
  </nav>
</div>
</div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #ffffff;
}

nav a.router-link-exact-active {
  color: #ffafcc;
}

@import './assets/css/style.css';
</style>
