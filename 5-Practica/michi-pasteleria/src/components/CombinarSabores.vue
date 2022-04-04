<template>
  <div>
    <label for="lblSabor">¿Qué sabor desea?</label><br />
    <select v-model="sabores">
      <option v-for="sabor in $store.state.sabores" :key="sabor.index">
        {{ sabor.nombre }}
      </option></select
    ><br />
    <button @click="$store.dispatch('addSabor')" class="boton__combinar">
      Combinar sabor</button
    ><br />
  </div>
</template>

<script>
export default {
  name: "CombiSabores",
  props:{
    sabores: String
  }
};
</script>