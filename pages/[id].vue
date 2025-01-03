<template>
  <v-container>
    <!-- skeleton de chargement de la page -->
    <AtomsMovieSkeleton v-if="status === 'pending'" />

    <div v-else>
      <v-row class="mt-5">
        <v-col cols="12" md="6">
          <!-- backdrop poster du film -->
          <v-icon
            v-if="movie?.backdrop_path === null"
            style="height: 320px; width: 100%"
            size="100"
            >mdi-image-off</v-icon
          >
          <v-img
            v-else
            :src="`${runtimeConfig.public.images}/${movie?.backdrop_path}`"
            class="rounded"
          />
        </v-col>

        <v-col cols="12" md="6">
          <!-- titre et note de l'oeuvre -->
          <div class="d-flex ga-3">
            <h1>{{ movie?.title }}</h1>
            <AtomsMovieDetailsReviewCircle
              :vote_average="movie?.vote_average"
            />
          </div>

          <!-- date de sortie, durée, budget -->
          <p class="text-grey font-italic">
            {{
              useDateFormat(new Date(movie?.release_date), "DD MMMM YYYY", {
                locales: "fr-FR",
              })
            }}
            - {{ movie.runtime }} min -
            {{ movie?.budget != 0 ? "$" + movie?.budget : "Budget inconnu" }}
          </p>

          <!-- chips pour le nom des genres -->
          <div class="d-flex ga-3 my-2">
            <v-chip
              v-for="(genre, index) in movie?.genres"
              :key="index"
              variant="outlined"
            >
              {{ genre.name }}
            </v-chip>
          </div>

          <!-- résumé de l'oeuvre -->
          <div>
            <p>
              {{ movie.overview ? movie.overview : "Pas de résumé disponible" }}
            </p>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="6">
          <h2>Casting</h2>

          <!-- cartes des acteurs -->
          <div class="d-flex flex-wrap">
            <v-col
              v-for="(card, index) in movie.cast"
              :key="index"
              cols="6"
              lg="3"
              style="padding: 4px"
            >
              <MoleculesActorCard
                :profile_path="card.profile_path"
                :name="card.name"
                :character="card.character"
              />
            </v-col>
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <!-- vidéo de trailer -->
          <iframe
            v-if="movie?.videos?.results?.length > 0"
            ref="el"
            :src="`https://www.youtube.com/embed/${movie.videos.results[0].key}`"
            frameborder="0"
            class="rounded"
            width="100%"
            :height="height"
          />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>
<script setup lang="ts">
import { useDateFormat } from "@vueuse/core";

const route = useRoute();

const runtimeConfig = useRuntimeConfig();

const messageStore = useMessageStore();

const moviesStore = useMoviesStore();

const { data: movie, status } = await useFetch(
  `https://api.themoviedb.org/3/movie/${route.params.id}?api_key=${runtimeConfig.public.apiKey}&language=fr-FR&append_to_response=videos,credits`,
  {
    transform(input: Movie) {
      return {
        title: input.title,
        backdrop_path: input.backdrop_path,
        cast: input.credits.cast.filter((_, index) => index < 8),
        release_date: input.release_date,
        runtime: input.runtime,
        credits: input.credits,
        budget: input.budget,
        genres: input.genres,
        vote_average: input.vote_average,
        overview: input.overview,
        videos:
          input.videos?.results?.length > 0 ? input.videos : { results: [] },
      };
    },
    onResponseError({ request, response, options }) {
      messageStore.showMessage = true;
      messageStore.message = response._data.status_message;
    },
  }
);

const el = ref(null);

const { width } = useElementSize(el);

const height = computed(() => (315 * width.value) / 560);

onBeforeRouteLeave(() => {
  moviesStore.resetMovies();
});
</script>
