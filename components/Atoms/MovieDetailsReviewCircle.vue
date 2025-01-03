<template>
  <div
    class="circle d-flex justify-center align-center bg-background rounded-circle"
  >
    <!-- note globale du film -->
    <v-progress-circular
      :model-value="vote_average as any * 10"
      :color="color"
      class="w-100 h-100"
    >
      <p class="text-white font-weight-bold">{{ vote_average?.toFixed(1) }}</p>
    </v-progress-circular>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  vote_average: {
    type: Number,
  },
});

// définition de la couleur de la jauge de la note en fonction du score
const color = computed(() => {
  const vote = props.vote_average as number;
  switch (true) {
    case vote <= 4:
      return "red-darken-1";
    case vote > 4 && vote < 7:
      return "amber-lighten-2";
    default:
      return "green-lighten-1";
  }
});
</script>

<style scoped>
.circle {
  height: 40px;
  width: 40px;
}
</style>
