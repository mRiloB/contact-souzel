<script lang="ts" setup>
import { useLinks } from '@/composables/links'
import { computed } from 'vue';
import CardCarousel from './CardCarousel.vue';
const { images } = defineProps<{
  title: string;
  description: string;
  images: string[];
  imgHeight: number;
}>()
const ulinks = useLinks()
const oneImage = computed(() => images.length === 1);
</script>

<template>
  <v-card class="mx-auto mb-5" max-width="600" color="#011a2e">
    <v-img class="align-end text-white" :height="imgHeight" :src="images[1]" cover v-if="oneImage" />
    <card-carousel :images="images" :img-height="imgHeight" v-else />
    <v-card-title>{{ title }}</v-card-title>
    <v-card-text class="text-justify">
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
