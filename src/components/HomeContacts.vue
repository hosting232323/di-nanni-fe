<template>
  <v-container class="padding-fix">
    <h1 class="text-h3 font-weight-bold mb-4" style="color: #7d2636;">Contattami</h1>
    <v-row class="d-flex justify-center">
      <v-col cols="12" sm="4" md="4" :class="['d-flex', 'justify-center', 'flex-column', { 'align-center': isMobile }]">
          <p class="d-flex align-center" style="margin-bottom: 20px; width: 250px;">
            <span class="mdi mdi-map-marker-outline icon"></span>
            Via Corfù 13, 70121 Bari
          </p>
          <p class="d-flex align-center" style="margin-bottom: 20px; width: 250px;">
            <span class="mdi mdi-calendar-blank-outline icon"></span>
            <span>Dal <strong>lunedì</strong> al <strong>sabato</strong><br><i>solo su appuntamento</i></span>
          </p>
          <div style="width: 250px;">
            <p class="d-flex align-center">
              <span class="mdi mdi-information-outline icon"></span>
              Per info e prenotazioni:
            </p>
            <ul>
              <li>
                <span class="mdi mdi-phone-outline icon"></span><a href="tel:+393792185146"><i>Chiamami</i></a>
              </li>
              <li>
                <span class="mdi mdi-whatsapp icon"></span><a href=""><i>Scrivimi su Whatsapp</i></a>
              </li>
              <li>
                <span class="mdi mdi-pencil-outline icon"></span><a href=""><i>Compila il form</i></a>
              </li>
            </ul>
          </div>
          <div class="d-flex justify-center">
            <a href="https://www.instagram.com/dott.ssa_dorianadinanni" target="_blank"><span class="mdi mdi-instagram social"></span></a>
            <a href="https://www.facebook.com/inphytoveritas" target="_blank"><span class="mdi mdi-facebook social"></span></a>
          </div>
      </v-col>
      <v-col cols="12" sm="6"  md="8">
        <v-card>
          <Map />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import mobile from '@/utils/mobile';
import Map from '@/components/Map';

const isMobile = mobile.setupMobileUtils();
</script>

<style scoped>
.icon {
  font-size: 24px; 
  margin-right: 10px;
}
.social{
  font-size: 50px;
  margin: 0 20px;
  color: #9a3548;
  transition: color 0.3s ease;
}
.social:hover {
  color: #ff3366;
}

ul {
  padding: 0 30px; 
  list-style: none;
}
ul li {
  margin-bottom: 5px;
}
ul li a {
  color: #9a3548;
}

.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 13px;
}
</style>
