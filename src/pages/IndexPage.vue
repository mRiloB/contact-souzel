<script lang="ts" setup>
import ActionsBio from '@/components/ActionsBio.vue'
import HeaderBio from '@/components/HeaderBio.vue'
import ShopBio from '@/components/ShopBio.vue'
</script>

<template>
  <main>
    <header-bio />
    <actions-bio />
    <shop-bio />
  </main>
</template>

<style>
main {
  max-width: 400px;
  margin: 0 auto;
}
</style>
