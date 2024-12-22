<template>
    <v-row>
        <v-col
            v-for="(movie, index) in moviesStore.movies?.results"
            :key="index"
            cols="2"
        >
            <v-skeleton-loader
            class="mx-auto border"
            max-width="300"
            type="card"
            ></v-skeleton-loader>
        </v-col>
    </v-row>
</template>

<script setup lang="ts">
const moviesStore = useMoviesStore();
</script>

<style>
.v-skeleton-loader__card .v-skeleton-loader__image {
    height: 350px!important;
}
</style>