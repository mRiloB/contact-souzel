<script lang="ts" setup>
import ShopCard from './ShopCard.vue'
import { products } from '@/utils/products';
</script>

<template>
  <div class="shop">
    <shop-card v-for="(item, key) in products" :key="key" :title="item.title" :description="item.description"
      :images="item.images" :img-height="350" />
  </div>
</template>

<style scoped></style>
