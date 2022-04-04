<template>
  <!-- <div class="cantidades">
    <div>
      <div>
        <div class="cantidad__t">Sabor => Cantidad</div>
        <div
          v-for="sabor in $store.state.sabores"
          class="cantidad"
          :key="sabor.index"
        >
          <span>{{ sabor.nombre }}</span> => {{ sabor.cantidad }} Kg
        </div>
      </div>
    </div>
  </div> -->
  <div>
    <h1>Cantidad de Sabores</h1>
        <table>
      <thead>
        <tr>
          <th>Sabor</th>
          <th>Cantidad</th>
        </tr>
      </thead>
        <tbody>
          <tr v-for="sabor in $store.state.sabores"
          :key="sabor.index">
          <td v-text="sabor.nombre"></td>
          <td v-text="sabor.cantidad"></td>
          </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "CantidadSabores",
};
</script>