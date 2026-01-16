<script lang="ts" setup>
import { useLinks } from '@/composables/links'
// const { title, description, image } =
defineProps<{
  title: string
  description: string
  image: string
}>()
const ulinks = useLinks()
</script>

<template>
  <v-card class="mx-auto mb-5" max-width="600" color="#011a2e">
    <v-img class="align-end text-white" height="300" :src="image" cover />

    <v-card-title>{{ title }}</v-card-title>
    <v-card-text>
      {{ description }}
    </v-card-text>

    <v-card-actions>
      <v-btn color="white" variant="outlined" text="Garanta já o seu!" block @click="ulinks.whatsapp" />
    </v-card-actions>
  </v-card>
</template>

<style scoped>
.v-card {
  border: 3px solid white;
  border-radius: 10px;
}
</style>
