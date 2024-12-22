<template>
    <v-dialog v-model="messageStore.showMessage" width="400">
        <v-card>
            <v-card-text>
                <p>{{ messageStore.message }}</p>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script setup lang="ts">
const messageStore = useMessageStore();
</script>