<template>
<div>
    <Pedido />
    <Informacion />
</div>
</template>

<script>
import Pedido from '../components/Pedido.vue';
import Informacion from '../components/Informacion.vue';

export default{
    name: 'PedidoView',
    components: {
        Pedido,
        Informacion
    }
}
</script>