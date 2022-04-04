<template>
  <div class="form__pedido">
    <h1>Pedido</h1>
    <div class="focontainer">
      <label for="name">Nombre</label><br />
      <input type="text" placeholder="Nombre" v-model="name" /><br />
      <label for="email">Email</label><br />
      <input type="email" placeholder="email" v-model="email" /><br />
      <label for="name">Numero</label><br />
      <input type="text" placeholder="#5554535251" v-model="number" /><br />
      <label for="name">Dirección</label><br />
      <input
        type="text"
        placeholder="Insurgentes 123456 CDMX"
        v-model="dir"
      /><br />
      <label for="lblPastel">¿Qué tipo de pastel desea?</label><br />
      <select v-model="pasteles">
        <option v-for="pastel in $store.state.pasteles" :key="pastel.index">
          {{ pastel.tipo }}
        </option>
      </select>
      <br />
      <label for="lblPersonas">¿Para cuántas personas?</label><br />
      <select v-model="personas">
        <option v-for="persona in $store.state.personas" :key="persona.index">
          {{ persona }}
        </option>
      </select>
      <br />
      <CombiSabores />
      <CombiDecoraciones /><br />
      <button v-on:click='addPedido' class="boton">Pedir</button>
    </div>
  </div>
</template>

<script>
import CombiSabores from "./CombinarSabores.vue";
import CombiDecoraciones from "./CombinarDecoraciones.vue";

export default {
  name: "Pedido",
  components: {
    CombiSabores,
    CombiDecoraciones,
  },
    props:{
    sabores: String
  },
//   data() {
//     return {
//       name: "",
//       email: "",
//       number: "",
//       dir: "",
//       pasteles: "",
//       personas: "",
//       sabores: "",
//       decoraciones: "",
//     }
//   },
  computed: {
    addPedido() {
      this.$store.state.pedido.nombre = this.name;
      this.$store.state.pedido.email = this.email;
      this.$store.state.pedido.telefono = this.number;
      this.$store.state.pedido.direccion = this.dir;
      this.$store.state.pedido.pastel = this.pasteles;
      this.$store.state.pedido.personas = this.personas;
      this.$store.state.pedido.sabor = this.sabores;
      this.$store.state.pedido.decoracion = this.decoraciones;
      this.$store.dispatch('addPedidoAction');
      console.log(this.$store.state.pedido);
      console.log(this.$store.state.pedidos);
      this.name="";
      this.email="";
      this.number="";
      this.dir="";
      this.pasteles="";
      this.personas="";
      this.sabores="";
      this.decoraciones="";
    },
  },
};
</script>