<script lang="ts" setup>
import { ref } from 'vue'
import ActionBtn from './ActionBtn.vue'
const { clipboardText, message, image } = defineProps<{
  clipboardText: string
  message: string
  altMessage?: string
  image: string
}>()
const snackbar = ref(false)

const copyToClipboard = () => {
  window.navigator.clipboard
    .writeText(clipboardText)
    .then(() => {
      snackbar.value = true
    })
    .catch((err) => {
      alert('Erro ao copiar: ' + err)
    })
}
</script>

<template>
  <action-btn :src="image" @click="copyToClipboard" />

  <v-snackbar v-model="snackbar"> {{ message }} {{ altMessage! }} </v-snackbar>
</template>

<style></style>
