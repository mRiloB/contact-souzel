<script lang="ts" setup>
import ActionsBio from '@/components/ActionsBio.vue';
import HeaderBio from '@/components/HeaderBio.vue';
</script>

<template>
  <div id="home">
    <main>
      <header-bio />
      <actions-bio class="my-5" />
      <div class="shop">
        <v-card class="mx-auto" max-width="400">
          <div class="card-image-container">
            <img class="car-image-img" width="300" src="../assets/img/produto-1.jpg" />
          </div>
          <v-card-title>Chaveiro Mix Produções</v-card-title>
          <v-card-text>
            <div>pequeno e cheio de detalhes.</div>
          </v-card-text>
          <v-card-actions>
            <v-btn color="orange" text="Garanta já o seu!"></v-btn>
          </v-card-actions>
        </v-card>

        <v-card class="mx-auto my-4" max-width="400">
          <div class="card-image-container">
            <img class="car-image-img" width="300" src="../assets/img/produto-2.jpg" />
          </div>
          <v-card-title>Action Figure Madin Boo</v-card-title>
          <v-card-text>
            <div>cheio de ódio e pré treino.</div>
          </v-card-text>
          <v-card-actions>
            <v-btn color="orange" text="Garanta já o seu!"></v-btn>
          </v-card-actions>
        </v-card>

        <v-card class="mx-auto" max-width="400">
          <div class="card-image-container">
            <img class="car-image-img" width="300" src="../assets/img/produto-3.jpg" />
          </div>
          <v-card-title>Letreiro Personalizado</v-card-title>
          <v-card-text>
            <div>ideal para mostrar a sua marca.</div>
          </v-card-text>
          <v-card-actions>
            <v-btn color="orange" text="Garanta já o seu!"></v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </main>
  </div>
</template>

<style>
#home {
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-top;
  align-items: stretch;
  height: 100%;
  width: 100%;
  background: url("../assets/img/ecstudio3d_fundo.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

main {
  max-width: 400px;
  margin: 0 auto;
}

.card-image-container {
  height: 300px;
  width: 100%;
  overflow: hidden;
  text-align: center;
}
</style>
