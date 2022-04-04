<template>
  <label for="lblDecoracion">¿Qué tipo de Decoración?</label><br />
  <select v-model="decoraciones">
    <option
      v-for="decoracion in $store.state.decoraciones"
      :key="decoracion.index"
    >
      {{ decoracion.nombre }}
    </option>
  </select>
  <br />
  <button @click="$store.dispatch('addDeco')" class="boton__combinar">
    Combinar decoración
  </button>
  <br />
</template>

<script>
export default {
  name: "CombiDecoraciones",
  data() {
    return {
      decoracion:{
          nombre: ''
      }
    };
  },
};
</script>