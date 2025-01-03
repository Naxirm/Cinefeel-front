import { useDateFormat } from "@vueuse/core";
import type { Movies } from "../interfaces/movies.interface";

export const useMoviesStore = defineStore("movies", () => {
  const runtimeConfig = useRuntimeConfig();

  const searchString = ref("" as string);
  const lastSearchString = ref("" as string);
  const movies: Ref<Movies | null> = ref(null);
  const messageStore = useMessageStore();

  const page: Ref<number> = ref(1);

  const loading: Ref<boolean> = ref(false);

  const isSearching = ref(false);

  const featureMovies = async () => {
    if (searchString.value) return;
    try {
      loading.value = true;
      const response: Movies = await $fetch(
        `https://api.themoviedb.org/3/discover/movie?page=${page.value}&query=${searchString.value}&language=fr-FR&api_key=${runtimeConfig.public.apiKey}`
      );

      lastSearchString.value = "";

      movies.value = {
        ...response,
        total_pages: 1,
        results: response.results
          .filter((_: any, index: any) => index < 18)
          .map((movie: any) => {
            return {
              ...movie,
              title: movie.title,
              release_date: useDateFormat(
                new Date(movie.release_date),
                "MMMM YYYY",
                { locales: "fr-FR" }
              ),
              poster_path: runtimeConfig.public.images + movie.poster_path,
              vote_average: movie.vote_average,
            };
          }),
      };
      loading.value = false;
    } catch (error) {
      messageStore.showMessage = true;
      messageStore.message = error;
      console.error();
      loading.value = false;
    }
  };

  const searchMovies = async () => {
    try {
      isSearching.value = true;
      loading.value = true;
      const response: Movies = await $fetch(
        `https://api.themoviedb.org/3/search/movie?page=${page.value}&query=${searchString.value}&language=fr-FR&api_key=${runtimeConfig.public.apiKey}`
      );

      lastSearchString.value = searchString.value;

      movies.value = {
        ...response,
        results: response.results.map((movie: any) => {
          return {
            ...movie,
            title: movie.title,
            release_date: useDateFormat(
              new Date(movie.release_date),
              "MMMM YYYY",
              { locales: "fr-FR" }
            ),
            poster_path: runtimeConfig.public.images + movie.poster_path,
            vote_average: movie.vote_average,
          };
        }),
      };
      isSearching.value = false;
      loading.value = false;
    } catch (error) {
      messageStore.showMessage = true;
      messageStore.message = error;
      console.error();
      isSearching.value = false;
      loading.value = false;
    }
  };

  const resetMovies = () => {
    movies.value = null;
    lastSearchString.value = "";
    searchString.value = "";
  };

  return {
    featureMovies,
    searchMovies,
    resetMovies,
    movies,
    page,
    loading,
    searchString,
    lastSearchString,
  };
});
