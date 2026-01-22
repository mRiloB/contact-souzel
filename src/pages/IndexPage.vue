<script lang="ts" setup>
import ActionsBio from '@/components/ActionsBio.vue'
import HeaderBio from '@/components/HeaderBio.vue'
import MugattoFooter from '@/components/MugattoFooter.vue';
import ShopBio from '@/components/ShopBio.vue'
</script>

<template>
  <main>
    <header-bio />
    <actions-bio />
    <shop-bio />
  </main>
  <mugatto-footer />
</template>

<style>
main {
  max-width: 400px;
  margin: 0 auto;
  padding: 10px;
}
</style>
