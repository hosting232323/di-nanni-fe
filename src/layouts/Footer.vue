<template>
  <footer class="footer">
    <v-row>
      <v-col cols="12" lg="4" md="3" class="d-flex flex-column justify-center align-center">
        <img src="@/assets/logo.png" height="80px" width="152px">
        <div class="d-flex justify-center">
          <a href="https://www.instagram.com/dott.ssa_dorianadinanni" target="_blank"><span class="mdi mdi-instagram social"></span></a>
          <a href="https://www.facebook.com/inphytoveritas" target="_blank"><span class="mdi mdi-facebook social"></span></a>
        </div>
      </v-col>
      <v-col cols="12" lg="4" md="6">
        <h3 class="footer-title">Trattamenti</h3>
          <div class="d-flex justify-space-around">
            <ul class="footer-list">
              <li><router-link to="/trattamenti/agopuntura">Agopuntura</router-link></li>
              <li v-if="!isMobile"><router-link to="/trattamenti/fitoterapia-aromaterapia">Fitoterapia e Aromaterapia</router-link></li>
              <li v-else><router-link to="/trattamenti/fitoterapia-aromaterapia">Fitoterapia e<br> Aromaterapia</router-link></li>
              <li><router-link to="/trattamenti/taopatch">Taopatch</router-link></li>
            </ul>
            <ul class="footer-list">
              <li><router-link to="/trattamenti/sobada-rebozo">Sobada e Rebozo</router-link></li>
              <li v-if="!isMobile"><router-link to="/trattamenti/tecniche-complementari">Tecniche complementari</router-link></li>
              <li v-else><router-link to="/trattamenti/tecniche-complementari">Tecniche<br>complementari</router-link></li>
            </ul>
          </div>
      </v-col>
      <v-col cols="12" lg="4" md="3" class="d-flex flex-column justify-space-around">
        <router-link class="other-title" to="/contatti">Contattami</router-link>
        <router-link class="other-title" to="/chi-sono">Scopri chi sono</router-link>
        <router-link class="other-title" to="/agenda">Agenda</router-link>
      </v-col>
    </v-row>
  </footer>
</template>

<script setup>
import mobile from '@/utils/mobile';

const isMobile = mobile.setupMobileUtils();
</script>

<style scoped>
.footer {
  background: linear-gradient(to top, #7D2636, #a33a4d);
  color: white;
  padding: 40px 20px;
  text-align: center;
}

.social {
  font-size: 35px;
  margin: 0 10px;
  color: white;
}

.footer-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: bold;
}

.footer-list {
  padding: 0;
  text-align: left;
}

.other-title {
 font-size: 18px;
}
.footer-title a, .other-title {
  text-decoration: none;
  color: white;
}

.footer-title a:hover , .other-title:hover {
  text-decoration: underline;
}

.double-footer {
  display: flex;
}



.footer-list li {
  margin-bottom: 0.5rem;
}

.footer-list li a {
  color: white;
  text-decoration: none;
  font-size: 1rem;
}

.footer-list li a:hover {
  text-decoration: underline;
}

.social-row {
  margin-top: 20px;
}

.social-btn {
  margin: 0 10px;
  transition: transform 0.2s ease-in-out;
}

.social-btn:hover {
  transform: scale(1.1);
}
</style>
