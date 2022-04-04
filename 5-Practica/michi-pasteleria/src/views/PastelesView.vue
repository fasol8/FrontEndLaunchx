<template>
<div>
    <Nosotros />
    <Pastel />
    <Sabores />
    <Decoracion />
    <Informacion />
</div>
</template>

<script>
import Sabores from '../components/Sabores.vue';
import Decoracion from '../components/Decoracion.vue';
import Nosotros from '../components/Nosotros.vue';
import Informacion from '../components/Informacion.vue';
import Pastel from '../components/Pasteles.vue';

export default{
    name: 'PastelesView',
    components: {
        Pastel,
        Sabores,
        Nosotros,
        Decoracion,
        Informacion
    }
}
</script>