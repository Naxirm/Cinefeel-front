<template>
  <v-app-bar color="primary">
    <v-container class="d-flex align-center text-white">
      <v-app-bar-title
        class="cursor-pointer"
        @click="router.push({ path: '/' })"
      >
        Logo à placer ici
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="moviesStore.searchString"
        variant="outlined"
        density="compact"
        label="Rechercher un film..."
        append-inner-icon="mdi-magnify"
        hide-details
        @click:append-inner="handleSearch()"
        @keyup.enter="handleSearch()"
      ></v-text-field>
    </v-container>
  </v-app-bar>
</template>

<script setup lang="ts">
const moviesStore = useMoviesStore();

const router = useRouter();

const handleSearch = () => {
  if (moviesStore.searchString !== "") {
    router.push({
      path: "/",
      query: { search: moviesStore.searchString },
    });
  } else {
    moviesStore.featureMovies();
  }
};
</script>
