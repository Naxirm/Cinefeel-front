<template>
  <v-row>
    <v-col
      v-for="(movie, index) in moviesStore.movies?.results"
      :key="index"
      cols="6"
      md="3"
      lg="2"
    >
      <v-card
        class="position-relative cursor-pointer"
        @click="router.push({ path: `/${movie.id}` })"
      >
        <v-icon
          v-if="movie.poster_path === 'https://image.tmdb.org/t/p/originalnull'"
          style="height: 262px; width: 100%"
          size="100"
          >mdi-image-off</v-icon
        >

        <v-img
          v-else
          :src="movie.poster_path"
          :alt="movie.title"
          style="height: 262px"
          cover
        ></v-img>

        <AtomsReviewCircle :vote_average="movie.vote_average" />

        <v-card-text>
          <p class="font-weight-bold text-body-1 text-no-wrap text-truncate">
            {{ movie.title }}
          </p>
          <p class="font-italic text-grey text-capitalize">
            {{ movie.release_date }}
          </p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
const moviesStore = useMoviesStore();

const router = useRouter();
</script>
