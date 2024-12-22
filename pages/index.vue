<template>
  <v-container>
    <h1 class="mt-8 mb-8" v-if="moviesStore.searchString != ''">Résultats pour "{{ moviesStore.searchString }}"</h1>

    <h1 class="mt-8 mb-8" v-else>En vedette aujourd'hui</h1>

    <AtomsSkeleton v-if="moviesStore.loading"/>

    <MoleculesMovieCard v-else/>

    <v-pagination
      v-if="moviesStore.movies?.total_pages !== 1"
      v-model="moviesStore.page"
      :length="moviesStore.movies?.total_pages"
      class="my-4"
      @update:model-value="moviesStore.searchMovies"
    ></v-pagination>
    
  </v-container>
</template>

<script setup lang="ts">
const moviesStore = useMoviesStore();

onBeforeMount(() => {
  moviesStore.featureMovies();
});
</script>
