<script lang="ts" setup>
defineProps<{
  images: string[];
  imgHeight: number;
}>();
</script>

<template>
  <v-carousel cycle hide-delimiters :show-arrows="false" :height="imgHeight">
    <v-carousel-item :src="image" cover v-for="(image, key) in images" :key="key" position="center" eager />
  </v-carousel>
</template>
