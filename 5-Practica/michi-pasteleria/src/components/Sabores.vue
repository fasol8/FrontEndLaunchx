<template>
  <div id="sabores">
    <div>
      <img src="../assets/images/sabor.png" alt="Sabor" />
    </div>
    <div class="con_sep">
      <h1>Sabores</h1>
      <div
        v-for="sabor in $store.state.sabores"
        class="carta"
        :key="sabor.index"
      >
        {{ sabor.nombre }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sabores",
};
</script>