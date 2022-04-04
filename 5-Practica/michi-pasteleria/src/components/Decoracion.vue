<template>
  <div id="decoracion">
    <div class="con_sep">
      <h1>Decoración</h1>
      <div
        v-for="decoracion in $store.state.decoraciones"
        class="carta"
        :key="decoracion.index"
      >
        {{ decoracion.nombre }}
      </div>
    </div>
    <div>
      <img src="../assets/images/deco.png" alt="Decoración" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Decoracion",
};
</script>