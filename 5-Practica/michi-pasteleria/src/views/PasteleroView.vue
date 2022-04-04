<template>
<div>
    <CantidadSabores />
    <CantidadDecoraciones />
    <CantidadPedidos/>
</div>
</template>

<script>

import CantidadDecoraciones from '../components/CantidadDecoraciones.vue';
import CantidadSabores from '../components/CantidadSabores.vue';
import CantidadPedidos from '../components/CantidadPedidos.vue';


export default{
    name: 'Pastelero',
    components: {
        CantidadDecoraciones,
        CantidadSabores,
        CantidadPedidos
    }
}
</script>