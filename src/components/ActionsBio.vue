<script lang="ts" setup>
import ActionBtn from './ActionBtn.vue'
import ClipboardActionBtn from './ClipboardActionBtn.vue'
import { useLinks } from '@/composables/links'
import WhatsappImg from '@/assets/img/whatsapp.png'
import InstagramImg from '@/assets/img/instagram.png'
import WifiImg from '@/assets/img/technology.png'
import PixImg from '@/assets/img/pix.png'
const uselinks = useLinks()
</script>

<template>
  <div class="content">
    <action-btn :src="WhatsappImg" @click="uselinks.whatsapp" />
    <action-btn :src="InstagramImg" @click="uselinks.instagram" />
    <clipboard-action-btn clipboard-text="12345678" message="Senha copiada com sucesso!"
      alt-message="Conecte-se a rede CASA_5G." :image="WifiImg" />
    <clipboard-action-btn clipboard-text="(##) # ####-####" message="Chave PIX copiada com sucesso!" :image="PixImg" />
  </div>
</template>

<style scoped>
.content {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0;
}
</style>
