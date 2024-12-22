<template>
    <v-row>
      <v-col v-for="(movie, index) in moviesStore.movies?.results" :key="index" cols="2">
        <v-card class="position-relative">
          <v-img :src="movie.poster_path" :alt="movie.title"></v-img>
          
          <AtomsReviewCircle :vote_average="movie.vote_average"/>
  
          <v-card-text>
            <p class="font-weight-bold text-body-1 text-no-wrap text-truncate">{{ movie.title }}</p>
            <p class="font-italic text-grey text-capitalize">{{ movie.release_date }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
</template>

<script setup lang="ts">
const moviesStore = useMoviesStore();
</script>