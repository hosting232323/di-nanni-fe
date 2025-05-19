<template>
  <footer class="footer">
    <v-container>
      <v-row class="justify-center" style="justify-content: space-around !important;">
        <v-col cols="12" md="6" v-if="!isMobile">
          <h3 class="footer-title">Trattamenti</h3>
          <div class="d-flex justify-center">
            <ul class="footer-list">
              <li><router-link to="/trattamenti/agopuntura">Agopuntura</router-link></li>
              <li><router-link to="/trattamenti/fitoterapia-aromaterapia">Fitoterapia e Aromaterapia</router-link></li>
              <li><router-link to="/trattamenti/taopatch">Taopatch</router-link></li>
            </ul>
            <ul class="footer-list">
              <li><router-link to="/trattamenti/emotional-freedom-technique">Emotional Freedom Technique</router-link></li>
              <li><router-link to="/trattamenti/sobada-rebozo">Sobada e Rebozo</router-link></li>
              <li><router-link to="/trattamenti/tecniche-complementari">Tecniche complementari</router-link></li>
            </ul>
          </div>
        </v-col>
        <v-col cols="12" md="6" v-else>
          <h3 class="footer-title">Trattamenti</h3>
          <div class="d-flex justify-center">
            <ul class="footer-list">
              <li><router-link to="/trattamenti/agopuntura">Agopuntura</router-link></li>
              <li><router-link to="/trattamenti/fitoterapia-aromaterapia">Fitoterapia e Aromaterapia</router-link></li>
              <li><router-link to="/trattamenti/taopatch">Taopatch</router-link></li>
              <li><router-link to="/trattamenti/emotional-freedom-technique">Emotional Freedom Technique</router-link></li>
              <li><router-link to="/trattamenti/sobada-rebozo">Sobada e Rebozo</router-link></li>
              <li><router-link to="/trattamenti/tecniche-complementari">Tecniche complementari</router-link></li>
            </ul>
          </div>
        </v-col>
        <v-col cols="12" md="3">
          <h3 class="footer-title"><router-link to="/contatti">Contattami</router-link></h3>
          <h3 class="footer-title"><router-link to="/chi-sono">Scopri chi sono</router-link></h3>
          <h3 class="footer-title"><router-link to="/agenda">Agenda</router-link></h3>
        </v-col>
      </v-row>
      <v-row justify="center" class="social-row">
        <v-btn icon href="https://www.instagram.com" target="_blank" class="social-btn">
          <v-icon size="30px" color="#E1306C">mdi-instagram</v-icon>
        </v-btn>
        <v-btn icon href="https://www.facebook.com" target="_blank" class="social-btn">
          <v-icon size="30px" color="#1877F2">mdi-facebook</v-icon>
        </v-btn>
      </v-row>
    </v-container>
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

.footer-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: bold;
}

.footer-title a {
  text-decoration: none;
  color: white;
}

.footer-title a:hover {
  text-decoration: underline;
}

.double-footer {
  display: flex;
}

.footer-list {
  list-style: none;
  padding: 0;
  min-width: 270px;
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
