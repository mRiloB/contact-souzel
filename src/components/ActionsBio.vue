<script lang="ts" setup>
import ActionBtn from './ActionBtn.vue';
import { useLinks } from '@/composables/links';
import WifiBtn from './WifiBtn.vue';
const uselinks = useLinks();
</script>

<template>
  <div class="content">
    <action-btn src="../assets/img/whatsapp.png" @click="uselinks.whatsapp" />
    <action-btn src="../assets/img/instagram.png" @click="uselinks.instagram" />
    <wifi-btn />
    <action-btn src="../assets/img/pix.png" />
  </div>
</template>

<style scoped>
.content {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
