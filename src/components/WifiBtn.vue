<script lang="ts" setup>
import { ref } from 'vue';
import WifiImg from "@/assets/img/technology.png";
import ActionBtn from './ActionBtn.vue';

const snackbar = ref(false);
const ssid = "CASA_5G";
const senha = "12345678";

const connect = () => {
  window.navigator.clipboard.writeText(senha).then(() => {
    snackbar.value = true;
  }).catch(err => {
    alert("Erro ao copiar: " + err);
  });
}
</script>

<template>
  <action-btn :src="WifiImg" @click="connect" />

  <v-snackbar v-model="snackbar">
    Senha copiada com sucesso! Conecte-se na rede {{ ssid }}.
    <!-- <template v-slot:actions>
      <v-btn color="pink" variant="text" @click="snackbar = false">
        Close
      </v-btn>
    </template> -->
  </v-snackbar>
</template>

<style></style>
