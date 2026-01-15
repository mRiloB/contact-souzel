<script lang="ts" setup>
const { src } = defineProps<{
  src: string
}>();
</script>

<template>
  <v-btn variant="text" size="lg">
    <v-img :src="src" width="50" />
  </v-btn>
</template>

<style scoped></style>
