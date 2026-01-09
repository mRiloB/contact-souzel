<template>
  <div id="home">
    <div class="header">
      <div class="logo-container">
        <img class="logo" src="../assets/img/ecstudio3d.jpg" alt="" />
      </div>
      <p class="title">EC Studio 3D</p>
      <p class="address">Endereço do estabelecimento</p>
    </div>
    <div class="content">
      <div class="d-flex align-center flex-column pa-6">
        <v-btn-group color="primary" elevation="5">
          <v-btn>
            <img src="../assets/img/whatsapp.png" alt="" height="40">
          </v-btn>
          <v-btn @click="instagram">
            <img src="../assets/img/instagram.png" alt="" height="40">
          </v-btn>
          <v-btn>
            <img src="../assets/img/technology.png" alt="" height="40">
          </v-btn>
          <v-btn>
            <img src="../assets/img/pix.png" alt="" height="40">
          </v-btn>
        </v-btn-group>
      </div>
    </div>
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
  </div>
</template>

<script lang="ts" setup>
function instagram() {
  window.open("https://instagram.com/ecstudio3d_", "__blank");
}
</script>

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

.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.logo-container {
  height: 150px;
  width: 150px;
  border-radius: 100%;
  overflow: hidden;
  border: 3px solid gold;
  margin-bottom: 10px;
}

.logo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.title,
.address {
  color: white;
  font-weight: bold;
  text-shadow: 1px 1px 3px #000;
}

.title {
  font-size: 24px;
}

.card-image-container {
  height: 300px;
  width: 100%;
  overflow: hidden;
  text-align: center;
}
</style>
