<template>
  <v-app-bar color="primary">
    <v-container class="d-flex align-center text-white">
      <v-app-bar-title>Cinéfeel</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-text-field
        variant="outlined"
        density="compact"
        label="Rechercher un film..."
        append-inner-icon="mdi-magnify"
        hide-details
      ></v-text-field>
    </v-container>
  </v-app-bar>
</template>
<script setup lang="ts"></script>
