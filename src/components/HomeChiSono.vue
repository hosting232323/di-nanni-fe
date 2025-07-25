<template>
  <v-container class="padding-fix">
    <v-row justify="center">
      <v-col cols="12" md="4" class="d-flex justify-center">
        <v-img src="../assets/lamiastoria.jpg" alt="Dott.ssa Doriana Di Nanni" class="dinanni-img"/>
      </v-col>
      <v-col cols="12" md="8" class="d-flex flex-column justify-center align-start">
        <h1 class="text-h3 font-weight-bold" style="color: #7d2636;">Chi Sono</h1>
        <p class="font-weight-medium text-muted mt-4 mb-4">
          Sono la Dott.ssa Doriana Di Nanni e credo che ogni persona meriti un percorso di cura su misura, che unisca medicina
          tradizionale e tecniche complementari.<br>La mia missione è aiutarti a migliorare la qualità della tua vita con un approccio
          scientifico e umano.
        </p>
        <a href="/chi-sono" class="more">Scopri di più...</a>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.dinanni-img {
  max-width: 500px;
  border-radius: 12px;
}

.more {
  font-family: 'Montserrat', sans-serif;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 600;
  text-decoration: none;
  position: relative;
  display: inline-block;
  font-style: italic;
  color: #7d2636;
}

.more::after {
  content: '';
  position: absolute;
  left: 0%;
  bottom: -2px;
  width: 50%;
  height: 2px;
  background-color: currentColor;
  transition: width 0.3s ease, left 0.3s ease;
}

.more:hover::after {
  width: 100%;
  left: 0;
  transform: none;
}
</style>