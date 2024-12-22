<template>
  <v-app id="inspire">
    <Navbar />

    <v-main>
      <slot></slot>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import Navbar from "~/components/Navbar.vue";
</script>
