<script lang="ts" setup>
import ECStudio3DImg from '@/assets/img/ecstudio3d.jpg'
</script>

<template>
  <div class="header">
    <v-avatar size="150" border="lg" color="white">
      <v-img class="logo" :src="ECStudio3DImg" alt="Logo da EC Studio 3D." />
    </v-avatar>
    <p class="title">EC Studio 3D</p>
    <p class="address">Rua Raimundo Uchôa Tenório</p>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
}

.title,
.address {
  color: white;
  font-weight: bold;
  text-shadow: 1px 1px 3px #000;
}

.title {
  font-size: 24px;
  margin: 10px 0;
}
</style>
