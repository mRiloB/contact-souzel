<script lang="ts" setup>
import ActionBtn from './ActionBtn.vue';
import WifiBtn from './WifiBtn.vue';
import { useLinks } from '@/composables/links';
import WhatsappImg from "@/assets/img/whatsapp.png";
import InstagramImg from "@/assets/img/instagram.png";
import PixImg from "@/assets/img/pix.png";
const uselinks = useLinks();
</script>

<template>
  <div class="content">
    <action-btn :src="WhatsappImg" @click="uselinks.whatsapp" />
    <action-btn :src="InstagramImg" @click="uselinks.instagram" />
    <wifi-btn />
    <action-btn :src="PixImg" />
  </div>
</template>

<style scoped>
.content {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
