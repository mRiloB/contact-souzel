<script lang="ts" setup>
import { ref } from 'vue'
import Produto1Img from '@/assets/img/produto-1.jpg'
import Produto2Img from '@/assets/img/produto-2.jpg'
import Produto3Img from '@/assets/img/produto-3.jpg'
import ShopCard from './ShopCard.vue'
const products = ref([
  {
    title: 'Chaveiro Mix Produções',
    description: 'Pequeno e cheio de detalhes.',
    image: Produto1Img,
  },
  {
    title: 'Action Figure Madin Boo',
    description: 'Cheio de ódio e pré-treino.',
    image: Produto2Img,
  },
  {
    title: 'Letreiro Personalizado',
    description: 'Ideal para mostrar a sua marca.',
    image: Produto3Img,
  },
])
</script>

<template>
  <div class="shop">
    <shop-card v-for="(item, key) in products" :key="key" :title="item.title" :description="item.description"
      :image="item.image" />
  </div>
</template>

<style scoped></style>
