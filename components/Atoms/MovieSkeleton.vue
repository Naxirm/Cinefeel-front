<template>
  <div>
    <v-row>
      <v-col cols="12" lg="6">
        <v-skeleton-loader
          class="mx-auto skeleton-card"
          type="image"
          width="100%"
        ></v-skeleton-loader>
      </v-col>
      <v-col cols="12" lg="6">
        <v-skeleton-loader
          class="mx-auto"
          type="heading, list-item, paragraph"
          width="100%"
          color="transparent"
        ></v-skeleton-loader>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.skeleton-card :deep(.v-skeleton-loader__bone) {
  height: 320px !important;
  border-radius: 4px;
}
</style>
