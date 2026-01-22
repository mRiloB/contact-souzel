<script lang="ts" setup>
import LogoMugatto from '@/assets/img/logo-gatto-mugatto.png';
function gotoMugatto() {
  window.open("https://instagram.com/mugatto.ss", "_blank");
}
</script>

<template>
  <footer @click="gotoMugatto">
    <p>Desenvolvido por</p>
    <img :src="LogoMugatto" alt="logo da empresa Mugatto - Software Solutions" height="30" />
  </footer>
</template>

<style scoped>
footer {
  background-color: #342454;
  color: white;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

p {
  margin-right: 5px;
}
</style>
