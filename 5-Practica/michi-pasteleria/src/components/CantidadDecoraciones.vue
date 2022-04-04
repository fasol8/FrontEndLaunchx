<template>
  <!-- <div class="cantidades">
    <div>
      <div>
        <div class="cantidad__t">Decoración => Cantidad</div>
        <div
          v-for="decoracion in $store.state.decoraciones"
          class="cantidad"
          :key="decoracion.index"
        >
          <span>{{ decoracion.nombre }}</span> =>
          {{ decoracion.cantidad }} pasteles
        </div>
      </div>
    </div>
  </div> -->
  <div>
    <h1>Cantidad de Decoraciones</h1>
    <table>
      <thead>
        <tr>
          <th>Decoracion</th>
          <th>Cantidad</th>
        </tr>
      </thead>
        <tbody>
          <tr v-for="decoracion in $store.state.decoraciones" :key="decoracion.index">
            <td v-text="decoracion.nombre"></td>
            <td v-text="decoracion.cantidad"></td>
          </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "CantidadDecoraciones",
};
</script>