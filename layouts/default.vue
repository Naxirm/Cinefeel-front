<template>
  <v-app id="inspire">
    <Navbar />

    <v-main>
      <slot></slot>
      <Message />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import Navbar from "~/components/Organisms/Navbar.vue";
import Message from "~/components/Atoms/Message.vue";
</script>
