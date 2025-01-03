<template>
  <v-container>
    <h1 class="mt-8 mb-8" v-if="moviesStore.lastSearchString !== ''">
      Résultats pour "{{ moviesStore.lastSearchString }}"
    </h1>

    <h1 class="mt-8 mb-8" v-else>A découvrir</h1>

    <AtomsSkeleton v-if="moviesStore.loading" />

    <MoleculesMovieCard v-else />

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
import { watch } from "vue";
const moviesStore = useMoviesStore();

const route = useRoute();

onBeforeMount(() => {
  const searchQuery = route.query.search as string;
  if (searchQuery) {
    moviesStore.searchString = searchQuery;
    moviesStore.searchMovies();
  } else {
    moviesStore.featureMovies();
  }
});

watch(
  () => route.query.search,
  (newSearch) => {
    if (newSearch) {
      moviesStore.searchString = newSearch as string;
      moviesStore.searchMovies();
    } else {
      moviesStore.featureMovies();
    }
  },
  { immediate: true }
);
</script>
