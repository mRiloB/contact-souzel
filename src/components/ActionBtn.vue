<script lang="ts" setup>
import { useImages } from '@/composables/images';
const { src } = defineProps<{
  src: string
}>();
const useimg = useImages();
const btnImg = useimg.require(src);
</script>

<template>
  <v-btn variant="text" size="lg">
    <v-img :src="btnImg" width="50" />
  </v-btn>
</template>

<style scoped></style>
