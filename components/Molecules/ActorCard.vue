<template>
  <v-card height="100%">
    <v-icon
      v-if="props.profile_path === null"
      style="height: 202px; width: 100%"
      size="100"
      >mdi-image-off</v-icon
    >
    <v-img
      v-else
      :src="`${runtimeConfig.public.images}/${props.profile_path}`"
      cover
    />
    <v-card-text>
      <p>{{ props.name }}</p>
      <p class="text-grey font-italic">{{ props.character }}</p>
    </v-card-text>
  </v-card>
</template>
<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();

const props = defineProps({
  profile_path: {
    type: String,
  },
  name: {
    type: String,
  },
  character: {
    type: String,
  },
});
</script>
