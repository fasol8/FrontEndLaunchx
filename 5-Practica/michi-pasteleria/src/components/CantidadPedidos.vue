<template>
  <!-- <div class="cantidades">
    <div>
      <div>
        <div class="cantidad__t">
          Nombre | Email | Telefono | Direeción | Pastel | Personas | Sabor |
          Decoracion
        </div>
        <div
          v-for="pedido in $store.state.pedidos"
          class="cantidad"
          :key="pedido.index"
        >
          {{ pedido.nombre }} | {{ pedido.email }} | {{ pedido.telefono }} |
          {{ pedido.direccion }} | {{ pedido.pastel }} | {{ pedido.personas }} |
          {{ pedido.sabor }} | {{ pedido.decoracion }}
        </div>
      </div>
    </div>
  </div> -->
  <div>
    <h1>Cantidad de Pedidos</h1>
        <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Email</th>
          <th>Telefono</th>
          <th>Dirección</th>
          <th>Pastel</th>
          <th>Personas</th>
          <th>Sabor</th>
          <th>Decoracion</th>
        </tr>
      </thead>
        <tbody>
          <tr v-for="pedido in $store.state.pedidos"
          :key="pedido.index">
          <td v-text="pedido.nombre"></td>
          <td v-text="pedido.email"></td>
          <td v-text="pedido.telefono"></td>
          <td v-text="pedido.direccion"></td>
          <td v-text="pedido.pastel"></td>
          <td v-text="pedido.personas"></td>
          <td v-text="pedido.sabor"></td>
          <td v-text="pedido.decoracion"></td>
          </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "CantidadPedidos",
};
</script>