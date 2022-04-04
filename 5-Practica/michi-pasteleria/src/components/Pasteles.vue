<template>
  <div id="pasteles">
    <div>
      <img src="../assets/images/pastel.png" alt="Pastel" />
    </div>
    <div>
      <h1>Pasteles</h1>
      <div
        v-for="pastel in $store.state.pasteles"
        class="carta"
        :key="pastel.index"
      >
        {{ pastel.tipo }}
        {{ pastel.precio }}
      </div>
    </div>
    <div>
      <img src="../assets/images/pastel_2.png" alt="Pastel" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Pasteles",
};
</script>